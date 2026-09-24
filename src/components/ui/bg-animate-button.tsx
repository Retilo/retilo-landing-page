"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const outerDivVariants = cva("relative inline-block overflow-hidden", {
  variants: {
    size: { sm: "", default: "", lg: "" },
    rounded: {
      full: "rounded-full before:rounded-full",
      xl: "rounded-xl before:rounded-xl",
      "2xl": "rounded-2xl before:rounded-2xl",
      "3xl": "rounded-3xl before:rounded-3xl",
      sm: "rounded-sm before:rounded-sm",
    },
  },
  defaultVariants: { size: "default" },
})

const innerSpanVariants = cva("absolute inset-[-1000%] m-auto block", {
  variants: {
    animation: {
      pulse: "animate-pulse",
      "spin-fast": "animate-[spin_2s_linear_infinite]",
      "spin-slow": "animate-[spin_8s_linear_infinite]",
      spin: "animate-[spin_4s_linear_infinite]",
    },
    gradient: {
      ocean:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#a1c4fd_0%,#c2e9fb_50%,#a1c4fd_100%)]",
      candy:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#ff9a9e_0%,#fad0c4_50%,#fad0c4_90%,#ff9a9e_100%)]",
      forest:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#85d797_0%,#1a806b_50%,#85d797_100%)]",
      sunset:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#fe5d75_0%,#f5af19_50%,#fe5d75_100%)]",
      nebula:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#A77BFE_0%,#8860D0_50%,#A77BFE_100%)]",
      default:
        "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
    },
  },
  defaultVariants: { animation: "spin", gradient: "default" },
})

const buttonVariants = cva(
  "relative overflow-hidden px-6 py-2 text-sm font-bold transition-all duration-150 ease-in-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-4 py-1 text-xs",
        default: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
      },
      shadow: {
        flat: "",
        soft: "shadow-[0_2px_4px_rgba(0,0,0,.15),inset_0_1px_1px_rgba(255,255,255,.15),inset_0_-1px_2px_rgba(0,0,0,.3)]",
        base: "shadow-[0_3px_5px_rgba(0,0,0,.2),inset_0_0.5px_1px_rgba(255,255,255,.1),inset_0_-2px_3px_rgba(0,0,0,.4)]",
      },
      gradient: {
        ocean: "text-black",
        candy: "text-black",
        forest: "text-black",
        sunset: "text-black",
        nebula: "text-white",
        default: "text-white",
      },
      rounded: {
        full: "rounded-full",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        sm: "rounded-sm",
      },
    },
    defaultVariants: { size: "default", shadow: "base", rounded: "xl", gradient: "default" },
  }
)

export interface BgAnimateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof outerDivVariants>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animation?: "spin" | "pulse" | "spin-slow" | "spin-fast"
  gradient?: "ocean" | "candy" | "forest" | "sunset" | "nebula" | "default"
}

const BgAnimateButton = React.forwardRef<HTMLButtonElement, BgAnimateButtonProps>(
  (
    {
      size = "default",
      rounded = "full",
      shadow = "base",
      gradient = "default",
      animation = "spin",
      className,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(outerDivVariants({ size, rounded }), className)}
        ref={ref}
        {...props}
      >
        <span className={cn(innerSpanVariants({ gradient, animation }))} />
        <div className={cn(buttonVariants({ shadow, rounded, size, gradient }))}>
          {children ?? "Button"}
        </div>
      </Comp>
    )
  }
)

BgAnimateButton.displayName = "BgAnimateButton"

export { BgAnimateButton }
export default BgAnimateButton
