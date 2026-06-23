import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Retilo — Your 24/7 AI Employee. Built for India."
export const size = { width: 1200, height: 600 }
export const contentType = "image/png"

export default async function TwitterImage() {
  const interBold = await fetch(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhiI2B.woff2"
  ).then((r) => r.arrayBuffer())

  const interRegular = await fetch(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2"
  ).then((r) => r.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 600,
          display: "flex",
          background: "#0F0A1E",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter",
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 200,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(98,78,255,0.20) 0%, rgba(98,78,255,0) 70%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 64px",
            width: 720,
            height: "100%",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(124,58,237,0.50)",
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "white",
                  opacity: 0.9,
                }}
              />
            </div>
            <span
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.5px",
              }}
            >
              Retilo
            </span>
            <div
              style={{
                marginLeft: 8,
                padding: "4px 10px",
                borderRadius: 20,
                border: "1px solid rgba(245,158,11,0.40)",
                background: "rgba(245,158,11,0.10)",
              }}
            >
              <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700, letterSpacing: "1.5px" }}>
                BUSINESS
              </span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "white",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Your 24/7
            </span>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "white",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              AI Employee.
            </span>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                background: "linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)",
                backgroundClip: "text",
                color: "transparent",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Built for India.
            </span>
          </div>

          {/* Bottom */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontSize: 16, color: "rgba(255,255,255,0.50)", fontWeight: 400 }}>
              Reviews · AI Receptionist · Bookings · Demand Forecasting
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 20px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
                width: "fit-content",
                boxShadow: "0 4px 20px rgba(124,58,237,0.40)",
              }}
            >
              <span style={{ fontSize: 14, color: "white", fontWeight: 700 }}>
                Get started free → retilo.io
              </span>
            </div>
          </div>
        </div>

        {/* Right — clay orbs cluster */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 480,
            height: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Large orb */}
          <div
            style={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #A78BFA 0%, #7C3AED 55%, #4C1D95 100%)",
              boxShadow: "0 24px 80px rgba(124,58,237,0.50)",
              top: 80,
              right: 100,
            }}
          />
          {/* Medium orb */}
          <div
            style={{
              position: "absolute",
              width: 160,
              height: 160,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #C4B5FD 0%, #8B5CF6 55%, #5B21B6 100%)",
              boxShadow: "0 16px 50px rgba(124,58,237,0.35)",
              top: 260,
              right: 60,
            }}
          />
          {/* Small orb */}
          <div
            style={{
              position: "absolute",
              width: 100,
              height: 100,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #DDD6FE 0%, #A78BFA 55%, #7C3AED 100%)",
              boxShadow: "0 10px 30px rgba(124,58,237,0.30)",
              top: 60,
              right: 60,
            }}
          />
          {/* Tiny orb */}
          <div
            style={{
              position: "absolute",
              width: 70,
              height: 70,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #EDE9FE 0%, #C4B5FD 55%, #8B5CF6 100%)",
              top: 390,
              right: 200,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400 },
        { name: "Inter", data: interBold, weight: 800 },
      ],
    }
  )
}
