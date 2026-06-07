import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, GitBranch, Sparkles } from "lucide-react";
import type { PortfolioProject } from "@/lib/projects";
import {
  disabledButton,
  ghostButton,
  primaryButton,
  secondaryButton,
  shellCard,
  statusClass,
  potentialClass,
} from "@/lib/ui";

type ProjectCardProps = {
  project: PortfolioProject;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.githubUrl);
  return (
    <article className={`${shellCard} group flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.07] animate-fade-up`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {project.name}
          </h3>
        </div>

        {project.deployVercel ? (
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100">
              <BadgeCheck className="h-3.5 w-3.5" />
              Publicado
            </span>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
              Vercel
            </span>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClass(project.status)}`}>
          {project.status}
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${potentialClass(project.portfolioPotential)}`}>
          Potencial {project.portfolioPotential}
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200">
          {project.type}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, compact ? 4 : 6).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {!compact ? (
          <div className="grid gap-2">
            {project.improvements.slice(0, 2).map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-1">
          {hasDemo ? (
            <a
              href={project.demoUrl!}
              target="_blank"
              rel="noreferrer"
              className={primaryButton}
            >
              Ver site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <Link href={project.detailsPath} className={secondaryButton}>
              Ver detalhes
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}

          {hasCode ? (
            <a
              href={project.githubUrl!}
              target="_blank"
              rel="noreferrer"
              className={ghostButton}
            >
              <GitBranch className="h-4 w-4" />
              Código
            </a>
          ) : (
            <span className={disabledButton}>Em desenvolvimento</span>
          )}
        </div>
      </div>
    </article>
  );
}
