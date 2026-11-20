import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = `${site.name}, ${site.role}`;

export default async function OpenGraphImage() {
  const anton = await readFile(join(process.cwd(), "src/app/fonts/Anton-Regular.ttf"));

  const grid =
    "linear-gradient(rgba(241,239,233,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(241,239,233,0.07) 1px, transparent 1px)";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: "#08090c",
          backgroundImage: grid,
          backgroundSize: "48px 48px",
          color: "#f1efe9",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 24 }}>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#3cd2dc" }}>bruno@b2026:~$</span>
            <span style={{ marginLeft: 12 }}>ollama run qwen3</span>
          </div>
          <div style={{ display: "flex", color: "#ff7ac8" }}>&gt;&gt;&gt; Oi, Bruno. Julinha online. Nexo pronto.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Anton" }}>
          <div style={{ fontSize: 150, lineHeight: 0.9 }}>Bruno Gadelha</div>
          <div style={{ display: "flex", marginTop: 18 }}>
            <div style={{ backgroundColor: "#ee1c25", color: "#fff", fontSize: 64, padding: "6px 18px 2px" }}>
              DBA EM FORMAÇÃO
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#9a9ca3" }}>
            SQL · PostgreSQL · MySQL · Linux · IA local em 2 GPUs
          </div>
          <div style={{ display: "flex", fontFamily: "Anton", fontSize: 40, color: "#ffa028" }}>
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }],
    },
  );
}
