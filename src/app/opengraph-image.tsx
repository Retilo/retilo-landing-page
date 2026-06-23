import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Retilo — Your 24/7 AI Employee. Built for India."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OGImage() {
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
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "#F8F7FF",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(98,78,255,0.12) 0%, rgba(98,78,255,0) 70%)",
          }}
        />

        {/* Dot grid — subtle */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(124,58,237,0.10) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "52px 72px",
          }}
        >
          {/* Top — logo + URL */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Logo mark */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(124,58,237,0.40)",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "white",
                  opacity: 0.9,
                }}
              />
            </div>
            <span
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "#0F0A1E",
                letterSpacing: "-0.5px",
              }}
            >
              Retilo
            </span>

            {/* URL chip */}
            <div
              style={{
                marginLeft: "auto",
                padding: "6px 16px",
                borderRadius: 20,
                border: "1.5px solid rgba(124,58,237,0.25)",
                background: "rgba(124,58,237,0.06)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: "#7C3AED",
                  fontWeight: 600,
                }}
              >
                retilo.io
              </span>
            </div>
          </div>

          {/* Middle — headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                display: "flex",
                padding: "6px 14px",
                borderRadius: 20,
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.20)",
                width: "fit-content",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#7C3AED",
                  letterSpacing: "0.8px",
                }}
              >
                AI · CLINICS · SALONS · RESTAURANTS · KIRANA
              </span>
            </div>

            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#0F0A1E",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Your 24/7
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#0F0A1E",
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              AI Employee.
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                background: "linear-gradient(90deg, #7C3AED 0%, #624EFF 100%)",
                backgroundClip: "text",
                color: "transparent",
                lineHeight: 1.1,
                letterSpacing: "-2px",
              }}
            >
              Built for India.
            </span>
          </div>

          {/* Bottom — tagline + feature pills */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: "#6B7280",
                fontWeight: 400,
                maxWidth: 620,
                lineHeight: 1.6,
              }}
            >
              Reviews · AI Phone Receptionist · Bookings · Demand Forecasting
            </span>

            <div style={{ display: "flex", gap: 10 }}>
              {["WhatsApp Inbox", "Google Reviews", "UPI Payments"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 24,
                      border: "1.5px solid rgba(15,10,30,0.12)",
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#374151",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right side — decorative clay orbs */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
          }}
        >
          {[
            { size: 140, opacity: 0.9, top: 0 },
            { size: 90, opacity: 0.7, top: 0 },
            { size: 110, opacity: 0.8, top: 0 },
          ].map((orb, i) => (
            <div
              key={i}
              style={{
                width: orb.size,
                height: orb.size,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, rgba(167,139,250,${orb.opacity}) 0%, rgba(124,58,237,${orb.opacity * 0.6}) 60%, rgba(76,29,149,${orb.opacity * 0.4}) 100%)`,
                boxShadow: `0 ${orb.size * 0.1}px ${orb.size * 0.3}px rgba(124,58,237,0.30)`,
              }}
            />
          ))}
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
