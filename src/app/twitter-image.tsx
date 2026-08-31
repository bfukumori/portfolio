import { ImageResponse } from "next/og";

export const alt = "Bruno Fukumori | Engenheiro de Software Sênior";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#09090b",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "9999px",
            backgroundColor: "#34d399",
            boxShadow: "0 0 20px #34d399",
          }}
        />
        <span
          style={{
            color: "#a1a1aa",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Engenheiro de Software Sênior
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#fafafa",
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Bruno Fukumori
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#34d399",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Fullstack • TypeScript • Node.js • React • Next.js • React Native
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid #27272a",
          paddingTop: "28px",
        }}
      >
        <span
          style={{
            color: "#71717a",
            fontSize: "20px",
          }}
        >
          Arquiteturas Escaláveis & Performance
        </span>
        <span
          style={{
            color: "#a1a1aa",
            fontSize: "20px",
            fontFamily: "monospace",
          }}
        >
          github.com/bfukumori
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
