"use client"

import * as React from "react"
import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, useAnimations, useGLTF } from "@react-three/drei"
import * as THREE from "three"

// Kept within the camera's visible frustum at this distance/fov so the
// walk-in reads as a clean slide across frame, not a pop-in mid-stride.
const WALK_FROM_OFFSET = 0.75
const STOP_AT_X = 0.2
const WALK_SPEED = 0.6
const TURN_DURATION = 0.4
const GESTURE_LOOP_INTERVAL_MS = 3200

type Phase = "walking" | "turning" | "greeting"
type EnterFrom = "left" | "right"

// Clip names shared across every model in this scene — all three (Business
// Man, Worker, Casual Character) come from Quaternius's Ultimate Modular Men
// Pack and share the same "CharacterArmature|<clip>" rig/animation naming.
const WALK_CLIP_NAMES = ["CharacterArmature|Walk", "CharacterArmature|Run", "Walk"]
const IDLE_CLIP_NAMES = [
  "CharacterArmature|Idle_Neutral",
  "CharacterArmature|Idle",
  "Idle",
]
const GESTURE_CLIP_NAMES = ["CharacterArmature|Wave", "Wave"]

function pickClip(names: string[], pool: string[]) {
  return names.find((n) => pool.includes(n)) ?? names[0]
}

function AgentModel({
  modelUrl,
  skipWalk,
  loopGesture,
  enterFrom = "left",
  onGreet,
}: {
  modelUrl: string
  skipWalk: boolean
  loopGesture: boolean
  enterFrom?: EnterFrom
  onGreet: () => void
}) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF(modelUrl)
  const { actions, names } = useAnimations(animations, group)
  const [phase, setPhase] = useState<Phase>(skipWalk ? "greeting" : "walking")
  const [gesturing, setGesturing] = useState(false)
  const turnProgress = useRef(0)
  const greetedRef = useRef(false)

  const dir = enterFrom === "right" ? -1 : 1
  const walkFromX = dir > 0 ? STOP_AT_X - WALK_FROM_OFFSET : STOP_AT_X + WALK_FROM_OFFSET
  const walkSpeed = WALK_SPEED * dir
  const walkFacingY = dir > 0 ? Math.PI / 2 : -Math.PI / 2

  useEffect(() => {
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return
      obj.castShadow = true
      obj.receiveShadow = true
    })
  }, [scene])

  // Once greeted, periodically flip into a wave gesture and back so the
  // character never reads as "frozen" — there's always a little motion.
  useEffect(() => {
    if (phase !== "greeting" || !loopGesture) return
    const id = setInterval(() => {
      setGesturing(true)
      const timeout = setTimeout(() => setGesturing(false), 1400)
      return () => clearTimeout(timeout)
    }, GESTURE_LOOP_INTERVAL_MS)
    return () => clearInterval(id)
  }, [phase, loopGesture])

  useEffect(() => {
    if (!names.length) return
    const clipName =
      phase === "walking"
        ? pickClip(names, WALK_CLIP_NAMES)
        : gesturing
          ? pickClip(names, GESTURE_CLIP_NAMES)
          : pickClip(names, IDLE_CLIP_NAMES)
    const action = clipName ? actions[clipName] : undefined
    action?.reset().fadeIn(0.3).play()
    return () => {
      action?.fadeOut(0.3)
    }
  }, [phase, gesturing, actions, names])

  useEffect(() => {
    if (skipWalk && !greetedRef.current) {
      greetedRef.current = true
      onGreet()
    }
  }, [skipWalk, onGreet])

  useFrame((_, delta) => {
    if (!group.current) return

    if (phase === "walking") {
      group.current.position.x += walkSpeed * delta
      const reachedStop =
        dir > 0
          ? group.current.position.x >= STOP_AT_X
          : group.current.position.x <= STOP_AT_X
      if (reachedStop) {
        group.current.position.x = STOP_AT_X
        setPhase("turning")
      }
      return
    }

    if (phase === "turning") {
      turnProgress.current = Math.min(1, turnProgress.current + delta / TURN_DURATION)
      // Camera sits on +z; model's local forward is +z, so rotation.y = 0
      // faces the camera, regardless of which side it walked in from.
      group.current.rotation.y = THREE.MathUtils.lerp(
        walkFacingY,
        0,
        turnProgress.current
      )
      if (turnProgress.current >= 1) {
        setPhase("greeting")
        if (!greetedRef.current) {
          greetedRef.current = true
          onGreet()
        }
      }
    }
  })

  return (
    <primitive
      ref={group}
      object={scene}
      position={[skipWalk ? STOP_AT_X : walkFromX, -1, 0]}
      rotation={[0, skipWalk ? 0 : walkFacingY, 0]}
      scale={1.1}
    />
  )
}

// Placeholder stand-in shown if a model fails to load (e.g. missing file).
function AgentFallback({ onGreet }: { onGreet: () => void }) {
  useEffect(() => {
    onGreet()
  }, [onGreet])
  return (
    <mesh position={[STOP_AT_X, -0.6, 0]}>
      <capsuleGeometry args={[0.3, 0.6, 4, 8]} />
      <meshStandardMaterial color="#7c3aed" />
    </mesh>
  )
}

class ModelErrorBoundary extends React.Component<
  { onGreet: () => void; children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return <AgentFallback onGreet={this.props.onGreet} />
    return this.props.children
  }
}

export function AgentScene({
  modelUrl,
  skipWalk,
  loopGesture = false,
  enterFrom = "left",
  onGreet,
}: {
  modelUrl: string
  skipWalk: boolean
  loopGesture?: boolean
  enterFrom?: EnterFrom
  onGreet: () => void
}) {
  return (
    <Canvas
      camera={{ position: [0, -0.25, 5], fov: 26 }}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 2]} intensity={1.3} />
      <directionalLight position={[-2, 1.5, -1]} intensity={0.4} color="#c4b5fd" />
      <Suspense fallback={null}>
        <ModelErrorBoundary onGreet={onGreet}>
          <AgentModel
            modelUrl={modelUrl}
            skipWalk={skipWalk}
            loopGesture={loopGesture}
            enterFrom={enterFrom}
            onGreet={onGreet}
          />
        </ModelErrorBoundary>
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.35}
          scale={4}
          blur={2.5}
          far={1.5}
        />
      </Suspense>
    </Canvas>
  )
}

export function preloadAgentModel(modelUrl: string) {
  useGLTF.preload(modelUrl)
}
