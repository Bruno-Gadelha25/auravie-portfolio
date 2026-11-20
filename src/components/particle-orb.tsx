"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "nexo" | "julinha" | "fusao";

const MODES: { id: Mode; label: string; color: string; caption: string }[] = [
  { id: "nexo", label: "Nexo", color: "#3cd2dc", caption: "Nexo online" },
  { id: "julinha", label: "Julinha", color: "#ff7ac8", caption: "Julinha online" },
  { id: "fusao", label: "Modo fusão", color: "#ffa028", caption: "Modo fusão" },
];

const CYAN: [number, number, number] = [60, 210, 220];
const PINK: [number, number, number] = [255, 122, 200];
const ORANGE: [number, number, number] = [255, 160, 40];

// Formas: cada uma devolve um ponto 3D (raio ~1) para a partícula i de n.
function sphere(i: number, n: number): [number, number, number] {
  const y = 1 - (i / (n - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const t = i * 2.399963; // ângulo dourado
  const jitter = 1 + (Math.sin(i * 12.9898) * 0.5) * 0.06;
  return [Math.cos(t) * r * jitter, y * jitter, Math.sin(t) * r * jitter];
}

function heart(i: number, n: number): [number, number, number] {
  const t = (i / n) * Math.PI * 2 * 7.13;
  const layer = (i % 9) / 8; // preenche o volume em camadas
  const s = 0.35 + 0.65 * Math.sqrt(layer);
  const x = 16 * Math.sin(t) ** 3;
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  const z = Math.sin(i * 7.77) * 4 * (1 - layer * 0.6);
  return [(x / 17) * s, (y / 17) * s + 0.12, (z / 17) * s];
}

function fusion(i: number, n: number): [number, number, number] {
  const part = i % 3;
  if (part === 2) {
    // núcleo pequeno
    const [x, y, z] = sphere(i, n);
    return [x * 0.38, y * 0.38, z * 0.38];
  }
  // dois anéis entrelaçados, um para cada persona
  const t = (i / n) * Math.PI * 2 * 3 + (Math.sin(i * 3.1) * 0.05);
  const tube = 0.09 * Math.sin(i * 5.3);
  const r = 0.95 + tube;
  const x = Math.cos(t) * r;
  const y = Math.sin(t) * r;
  const tilt = part === 0 ? 0.9 : -0.9;
  return [x, y * Math.cos(tilt), y * Math.sin(tilt) + tube];
}

function colorFor(mode: Mode, i: number): [number, number, number] {
  if (mode === "nexo") return CYAN;
  if (mode === "julinha") return PINK;
  const part = i % 3;
  return part === 0 ? CYAN : part === 1 ? PINK : ORANGE;
}

export function ParticleOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef<Mode>("nexo");
  const [mode, setMode] = useState<Mode>("nexo");

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // ?persona=julinha ou ?persona=fusao abre direto naquele modo (bom para divulgar).
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("persona");
    if (wanted === "julinha" || wanted === "fusao") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(wanted);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    const n = small ? 1400 : 3200;

    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const p = sphere(i, n);
      pos.set(p, i * 3);
      col.set(CYAN, i * 3);
    }

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let tiltX = 0;
    let tiltY = 0;
    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      tiltY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
      tiltX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.4;
    };
    canvas.addEventListener("pointermove", onPointer);

    let angle = 0;
    let raf = 0;
    let visible = true;
    let running = false;
    let last = performance.now();

    const draw = (instant: boolean, dt = 16) => {
      const current = modeRef.current;
      const shape = current === "nexo" ? sphere : current === "julinha" ? heart : fusion;
      const ease = instant ? 1 : 1 - Math.exp(-dt / 260);

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.36;
      const cosA = Math.cos(angle + tiltY);
      const sinA = Math.sin(angle + tiltY);
      const cosB = Math.cos(tiltX);
      const sinB = Math.sin(tiltX);
      const breathe = 1 + Math.sin(angle * 2.2) * 0.015;

      for (let i = 0; i < n; i++) {
        const k = i * 3;
        const target = shape(i, n);
        pos[k] += (target[0] - pos[k]) * ease;
        pos[k + 1] += (target[1] - pos[k + 1]) * ease;
        pos[k + 2] += (target[2] - pos[k + 2]) * ease;
        const c = colorFor(current, i);
        col[k] += (c[0] - col[k]) * ease;
        col[k + 1] += (c[1] - col[k + 1]) * ease;
        col[k + 2] += (c[2] - col[k + 2]) * ease;

        // rotação em Y e inclinação em X
        const x = pos[k] * cosA - pos[k + 2] * sinA;
        let z = pos[k] * sinA + pos[k + 2] * cosA;
        const y = pos[k + 1] * cosB - z * sinB;
        z = pos[k + 1] * sinB + z * cosB;

        const depth = 2.6 / (2.6 + z);
        const sx = cx + x * scale * depth * breathe;
        const sy = cy - y * scale * depth * breathe;
        const alpha = 0.35 + 0.65 * ((1 - z) / 2);
        const size = (small ? 1.7 : 1.6) * depth;

        ctx.fillStyle = `rgba(${col[k] | 0},${col[k + 1] | 0},${col[k + 2] | 0},${alpha.toFixed(2)})`;
        ctx.fillRect(sx, sy, size, size);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      angle += dt * 0.00022;
      draw(false, dt);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Para de desenhar quando a esfera sai da tela ou a aba fica escondida.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    // Com movimento reduzido: um quadro parado, redesenhado ao trocar de modo.
    let stopReduced: (() => void) | null = null;
    if (reduced) {
      draw(true);
      const id = window.setInterval(() => draw(true), 400);
      stopReduced = () => window.clearInterval(id);
    } else {
      start();
    }

    return () => {
      stop();
      stopReduced?.();
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const active = MODES.find((item) => item.id === mode) ?? MODES[0];

  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden border border-line bg-[radial-gradient(circle_at_50%_45%,rgba(60,210,220,0.08),transparent_60%)] sm:aspect-[4/5]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label={`Esfera de partículas animada no modo ${active.label}`}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
          <p className="text-sm text-muted">Toque para trocar de persona</p>
          <p className="font-display text-3xl transition-colors duration-500" style={{ color: active.color }} aria-live="polite">
            {active.caption}
          </p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="Escolher persona">
        {MODES.map((item) => {
          const on = item.id === mode;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              aria-pressed={on}
              className="border px-2 py-2.5 text-sm font-semibold transition"
              style={{
                borderColor: on ? item.color : "var(--line)",
                color: on ? "var(--ink)" : "var(--bone)",
                background: on ? item.color : "transparent",
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
