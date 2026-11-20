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
      <p className="flex items-center gap-3 text-sm font-semibold text-muted">
        <span className="h-[3px] w-10 bg-red" aria-hidden />
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display max-w-3xl text-5xl text-bone sm:text-6xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
