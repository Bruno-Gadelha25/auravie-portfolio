import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { ContactBanner } from "@/components/contact-banner";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getProjectCase } from "@/lib/project-cases";
import { projects, getProjectBySlug } from "@/lib/projects";
import { site } from "@/lib/site";
import {
  disabledButton,
  ghostButton,
  primaryButton,
  sectionGlass,
  secondaryButton,
  shellCard,
  softCard,
  statusClass,
  potentialClass,
} from "@/lib/ui";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPublicationLabel(status: string, deployVercel: boolean) {
  if (deployVercel) {
    return "Publicado na Vercel";
  }

  if (status === "em andamento") {
    return "Em desenvolvimento";
  }

  return "Sem demo pública confirmada";
}

function getCodeLabel(hasCode: boolean) {
  return hasCode ? "Código público disponível" : "Repositório não público";
}

function SectionTextCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className={`${softCard} p-5 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </article>
  );
}

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

  const projectCase = getProjectCase(project);

  return {
    title: `${projectCase.title} | Auravie Portfolio`,
    description: projectCase.description,
    openGraph: {
      type: "article",
      title: `${projectCase.title} | Auravie Portfolio`,
      description: projectCase.description,
      url: `${site.vercelProjectUrl}/projetos/${project.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: projectCase.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectCase.title} | Auravie Portfolio`,
      description: projectCase.description,
      images: ["/opengraph-image"],
    },
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

  const projectCase = getProjectCase(project);
  const hasDemo = Boolean(project.demoUrl);
  const hasCode = Boolean(project.githubUrl);
  const publicationLabel = getPublicationLabel(project.status, project.deployVercel);
  const codeLabel = getCodeLabel(hasCode);

  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section
          className={`${sectionGlass} relative overflow-hidden p-6 sm:p-8 lg:p-10 animate-fade-up`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_26%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/projetos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar aos projetos
                </Link>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200">
                  {project.category}
                </span>

                <span className={`rounded-full border px-4 py-2 text-sm font-medium ${statusClass(project.status)}`}>
                  {project.status}
                </span>

                <span className={`rounded-full border px-4 py-2 text-sm font-medium ${potentialClass(project.portfolioPotential)}`}>
                  Potencial {project.portfolioPotential}
                </span>

                {project.deployVercel ? (
                  <>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100">
                      <BadgeCheck className="h-4 w-4" />
                      Publicado
                    </span>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                      Vercel
                    </span>
                  </>
                ) : null}
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/75">
                  Case profissional
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {projectCase.title}
                </h1>
                <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                  {projectCase.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                  <span className={disabledButton}>{publicationLabel}</span>
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
                  <span className={disabledButton}>{codeLabel}</span>
                )}

                <Link href="/contato" className={secondaryButton}>
                  Falar sobre este projeto
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className={`${softCard} p-5`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                    Valor para o cliente
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {projectCase.commercialValue}
                  </p>
                </article>

                <article className={`${softCard} p-5`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                    Status atual
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {projectCase.statusNote}
                  </p>
                </article>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`${shellCard} space-y-4 p-5`}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Visão geral
                </p>

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Publicação
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {publicationLabel}
                      </p>
                    </div>
                    {project.deployVercel ? (
                      <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                    ) : null}
                  </div>

                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Código
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {codeLabel}
                      </p>
                    </div>
                    <GitBranch className="mt-0.5 h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Tipo
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {project.type}
                      </p>
                    </div>
                    <Sparkles className="mt-0.5 h-5 w-5 text-cyan-300" />
                  </div>
                </div>
              </div>

              <div className={`${shellCard} space-y-4 p-5`}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Tecnologias usadas
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <SectionTextCard title="Contexto do projeto" text={projectCase.context} />
          <SectionTextCard title="Problema resolvido" text={projectCase.problem} />
          <SectionTextCard title="Solução desenvolvida" text={projectCase.solution} />
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className={`${sectionGlass} p-6 sm:p-8`}>
            <SectionHeading
              eyebrow="Tecnologias usadas"
              title="Stack aplicada no case"
              description="Tecnologias detectadas e combinadas para sustentar a experiência, a organização e a apresentação do projeto."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className={`${sectionGlass} p-6 sm:p-8`}>
            <SectionHeading
              eyebrow="Destaques técnicos"
              title="O que ganhou mais importância na execução"
              description="Os pontos abaixo ajudam a entender o foco técnico e a leitura de produto por trás da entrega."
            />
            <div className="mt-6 grid gap-3">
              {projectCase.technicalHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <SectionHeading
            eyebrow="O que este projeto demonstra"
            title="Competências que o case comunica"
            description="O que um cliente ou recrutador pode inferir ao analisar esta entrega."
          />
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {projectCase.demonstrates.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={`${sectionGlass} p-6 sm:p-8`}>
            <SectionHeading
              eyebrow="Valor comercial"
              title="Como este trabalho se posiciona para clientes"
              description="A proposta é mostrar de forma objetiva o tipo de valor que a entrega gera na prática."
            />
            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
              {projectCase.commercialValue}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className={`${softCard} p-5`}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Estado atual
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {projectCase.statusNote}
                </p>
              </div>

              <div className={`${softCard} p-5`}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Publicação
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {publicationLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {hasCode
                    ? "Repositório público disponível."
                    : "Sem repositório público confirmado."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className={`${sectionGlass} p-6 sm:p-8`}>
              <SectionHeading
                eyebrow="Próximos ajustes"
                title="O que ainda pode evoluir"
                description="Mesmo quando o case está pronto, ainda há espaço para aprofundar apresentação, documentação ou prova social."
              />
              <div className="mt-6 grid gap-3">
                {project.improvements.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className={`${sectionGlass} p-6 sm:p-8`}>
              <SectionHeading
                eyebrow="Pontos de atenção"
                title="Riscos e observações"
                description="Leituras importantes para manter a apresentação profissional e coerente com o estágio de cada projeto."
              />
              <div className="mt-6 grid gap-3">
                {project.risks.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactBanner />
      </Container>
    </div>
  );
}
