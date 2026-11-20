export const shellCard =
  "rounded-md border border-line bg-panel/90 backdrop-blur-sm";

export const softCard = "rounded-md border border-line bg-panel-2/70";

export const sectionGlass =
  "rounded-lg border border-line bg-panel/85 backdrop-blur-sm";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export const primaryButton = `${buttonBase} bg-red text-white shadow-[4px_4px_0_0_rgba(241,239,233,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(241,239,233,0.9)]`;

export const secondaryButton = `${buttonBase} border border-bone/80 bg-transparent text-bone hover:bg-bone hover:text-ink`;

export const ghostButton = `${buttonBase} border border-line bg-transparent text-bone/85 hover:border-bone/40 hover:text-bone`;

export const disabledButton = `${buttonBase} cursor-not-allowed border border-line bg-panel-2 text-muted`;

export function navLinkClass(active: boolean) {
  return [
    "relative px-1 py-2 text-sm font-medium transition",
    active
      ? "text-bone after:absolute after:inset-x-1 after:-bottom-0.5 after:h-[3px] after:bg-red"
      : "text-muted hover:text-bone",
  ].join(" ");
}

export function statusClass(status: string) {
  if (status === "pronto") {
    return "border-cyan/30 bg-cyan/10 text-cyan";
  }

  if (status === "em andamento") {
    return "border-orange/30 bg-orange/10 text-orange";
  }

  return "border-red/30 bg-red/10 text-red";
}

export function potentialClass(potential: string) {
  if (potential === "alto") {
    return "border-bone/20 bg-bone/5 text-bone";
  }

  return "border-line bg-panel-2 text-muted";
}
