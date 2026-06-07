import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, GitBranch, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { projects, getProjectBySlug } from "@/lib/projects";
import {
  primaryButton,
  sectionGlass,
  softCard,
  statusClass,
  potentialClass,
} from "@/lib/ui";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/projetos" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
              Voltar aos projetos
            </Link>
            {project.deployVercel ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100">
                <BadgeCheck className="h-4 w-4" />
                Publicado na Vercel
              </span>
            ) : null}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                {project.category}
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClass(project.status)}`}>
                  {project.status}
                </span>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${potentialClass(project.portfolioPotential)}`}>
                  Potencial {project.portfolioPotential}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  {project.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={primaryButton}
                >
                  GitHub
                  <GitBranch className="h-4 w-4" />
                </a>
                <Link href="/contato" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  Falar sobre este projeto
                </Link>
              </div>
            </div>

            <div className={`${softCard} space-y-4 p-5`}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Deploy
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.deployVercel
                    ? "Projetado para publicação na Vercel."
                    : "Não é uma base voltada para deploy público na Vercel."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`${sectionGlass} p-6 sm:p-8`}>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-cyan-200" />
              <h2 className="text-xl font-semibold text-white">
                O que pode ser melhorado
              </h2>
            </div>
            <div className="mt-5 grid gap-3">
              {project.improvements.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`${sectionGlass} p-6 sm:p-8`}>
            <h2 className="text-xl font-semibold text-white">Riscos e atenção</h2>
            <div className="mt-5 grid gap-3">
              {project.risks.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Resumo profissional
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                {project.summary}
              </p>
            </div>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Portfólio
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.publishGithub
                  ? "Vale publicar no GitHub com saneamento."
                  : "Ainda não é uma base pensada para publicação pública no GitHub."}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {project.deployVercel
                  ? "Vale fazer deploy na Vercel."
                  : "Não vale fazer deploy na Vercel nesta fase."}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={primaryButton}>
              GitHub
              <GitBranch className="h-4 w-4" />
            </a>
            <Link href="/projetos" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              Ver mais projetos
            </Link>
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Próximo passo
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Levar esse projeto para uma apresentação ainda mais forte
              </h2>
            </div>
            <Link href="/contato" className={primaryButton}>
              Conversar sobre o projeto
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
