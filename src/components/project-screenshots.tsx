import Image from "next/image";
import { getProjectScreenshots } from "@/lib/project-media";
import type { PortfolioProject } from "@/lib/projects";
import { sectionGlass, softCard } from "@/lib/ui";
import { SectionHeading } from "@/components/section-heading";

type ProjectScreenshotsProps = {
  project: PortfolioProject;
};

export function ProjectScreenshots({ project }: ProjectScreenshotsProps) {
  const screenshots = getProjectScreenshots(project.slug);

  if (!screenshots) {
    return null;
  }

  return (
    <section className={`${sectionGlass} p-6 sm:p-8`}>
      <SectionHeading
        eyebrow="Screenshots reais"
        title="Visual capturado da interface real"
        description="As imagens abaixo foram capturadas diretamente da interface do projeto em desktop e mobile para apresentar melhor o resultado final."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.75fr)]">
        <figure className={`${softCard} overflow-hidden`}>
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-950/70">
            <Image
              src={screenshots.desktop.src}
              alt={screenshots.desktop.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-white/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            Desktop
          </figcaption>
        </figure>

        <figure className={`${softCard} overflow-hidden`}>
          <div className="relative aspect-[9/16] overflow-hidden bg-slate-950/70 lg:max-h-[680px]">
            <Image
              src={screenshots.mobile.src}
              alt={screenshots.mobile.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 24vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-white/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            Mobile
          </figcaption>
        </figure>
      </div>

      <p className="mt-4 text-xs leading-6 text-slate-400">
        Capturas em formato leve, pensadas para evidenciar a experiência visual sem pesar o carregamento da página.
      </p>
    </section>
  );
}
