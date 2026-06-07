import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

