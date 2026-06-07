import { ImageResponse } from "next/og";
import { projects, publishedProjects, uniqueTechnologies } from "@/lib/projects";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#f8fafc",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.24), transparent 34%), radial-gradient(circle at right, rgba(16,185,129,0.22), transparent 26%), linear-gradient(180deg, #02040d 0%, #050816 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 0 60px rgba(34,211,238,0.24)",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            AV
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 18, letterSpacing: "0.24em", textTransform: "uppercase", color: "#a5f3fc" }}>
              {site.shortName}
            </span>
            <span style={{ fontSize: 20, color: "#94a3b8" }}>
              Portfólio profissional
            </span>
          </div>
        </div>

        <div style={{ display: "flex", maxWidth: 920, flexDirection: "column", gap: 20 }}>
          <h1 style={{ fontSize: 72, lineHeight: 1.02, margin: 0, fontWeight: 700 }}>
            Sites, IA e infraestrutura com apresentação profissional.
          </h1>
          <p style={{ fontSize: 28, lineHeight: 1.4, color: "#cbd5e1", margin: 0 }}>
            {site.description}
          </p>
        </div>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {[
            `${projects.length} projetos`,
            `${publishedProjects.length} publicados na Vercel`,
            `${uniqueTechnologies.length} tecnologias`,
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

