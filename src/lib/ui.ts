export const shellCard =
  "rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl";

export const softCard = "rounded-2xl border border-white/10 bg-white/5";

export const sectionGlass =
  "rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl";

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export const ghostButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export const disabledButton =
  "inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-500";

export function navLinkClass(active: boolean) {
  return [
    "rounded-full px-3 py-2 text-sm font-medium transition",
    active
      ? "bg-white/10 text-white"
      : "text-slate-300 hover:bg-white/5 hover:text-white",
  ].join(" ");
}

export function statusClass(status: string) {
  if (status === "pronto") {
    return "border-emerald-400/25 bg-emerald-400/10 text-emerald-200";
  }

  if (status === "em andamento") {
    return "border-amber-400/25 bg-amber-400/10 text-amber-200";
  }

  return "border-rose-400/25 bg-rose-400/10 text-rose-200";
}

export function potentialClass(potential: string) {
  if (potential === "alto") {
    return "border-cyan-400/25 bg-cyan-400/10 text-cyan-100";
  }

  if (potential === "médio") {
    return "border-sky-400/25 bg-sky-400/10 text-sky-100";
  }

  return "border-slate-400/25 bg-slate-400/10 text-slate-200";
}

