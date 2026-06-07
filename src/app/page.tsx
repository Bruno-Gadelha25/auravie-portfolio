import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  CircleDot,
  Code2,
  Globe2,
  LucideIcon,
  PenTool,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, publishedProjects, projects, uniqueTechnologies } from "@/lib/projects";
import { site, siteCategories } from "@/lib/site";
import {
  ghostButton,
  primaryButton,
  sectionGlass,
  shellCard,
  softCard,
} from "@/lib/ui";

const categoryIcons: Record<string, LucideIcon> = {
  "Sites e Landing Pages": Globe2,
  "Projetos Web": Code2,
  Automações: Workflow,
  "Experimentos com IA": BrainCircuit,
  "Dashboards e Dados": BarChart3,
  "Infraestrutura e Servidores": ServerCog,
  "Projetos em Desenvolvimento": Blocks,
};

const homeStats = [
  {
    label: "Projetos catalogados",
    value: String(projects.length),
    helper: "Bases que viraram case e portfólio.",
  },
  {
    label: "Sites publicados",
    value: String(publishedProjects.length),
    helper: "Projetos prontos para demonstração.",
  },
  {
    label: "Tecnologias detectadas",
    value: String(uniqueTechnologies.length),
    helper: "Stack real usada nas entregas.",
  },
  {
    label: "Categorias do site",
    value: String(siteCategories.length),
    helper: "Estrutura pensada para clientes e recrutadores.",
  },
];

const featuredCategoryMessage = [
  "Sites e landing pages com identidade clara",
  "Projetos web com interface funcional e moderna",
  "Automações e IA local com foco operacional",
];

export default function Home() {
  return (
    <div className="pb-8 pt-6 sm:pb-12 sm:pt-10">
      <Container className="space-y-16 lg:space-y-20">
        <section className={`${sectionGlass} overflow-hidden p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Auravie Portfolio
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                  Sites, web apps, IA e infraestrutura
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Portfólio profissional para reunir meus projetos com clareza,
                  tecnologia e apresentação sólida.
                </h1>
                <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                  {site.description}
                </p>
                <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                  Desenvolvo sites, landing pages, automações e projetos web com
                  foco em performance, responsividade e apresentação profissional.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/projetos" className={primaryButton}>
                  Ver projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={site.githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={ghostButton}
                >
                  GitHub
                </a>
                <Link href="/contato" className={ghostButton}>
                  Contato
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {featuredCategoryMessage.map((message) => (
                  <div
                    key={message}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300"
                  >
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{message}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className={`${shellCard} p-5`}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {homeStats.map((stat) => (
                    <div key={stat.label} className={`${softCard} p-4`}>
                      <p className="text-3xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {stat.helper}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${shellCard} p-5`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                      Stack recorrente
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                      Tecnologias com mais presença
                    </h2>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-cyan-200" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {uniqueTechnologies.slice(0, 12).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Seleção principal do portfólio"
            description="Os projetos abaixo representam as entregas mais fortes da base atual e a leitura mais clara para clientes e recrutadores."
          />

          <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="O que eu desenvolvo"
            title="Categorias que organizam a minha atuação"
            description="O portfólio está estruturado para mostrar não apenas projetos isolados, mas também a linha técnica que conecta cada entrega."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteCategories.map((category) => {
              const Icon = categoryIcons[category.label] ?? PenTool;

              return (
                <Link
                  key={category.slug}
                  href={category.route}
                  className={`${shellCard} group flex h-full flex-col justify-between p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-cyan-200" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
                    Explorar categoria
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Linha de trabalho"
            title="Como eu entrego meus projetos"
            description="Cada projeto tenta equilibrar performance, clareza visual, organização de conteúdo e uma base técnica fácil de manter."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {[
              {
                title: "Performance",
                text: "Estrutura enxuta, navegação leve e foco em carregamento rápido.",
              },
              {
                title: "Responsividade",
                text: "Interface consistente em desktop, tablet e celular.",
              },
              {
                title: "Apresentação",
                text: "Visual limpo, tecnologia evidente e narrativa profissional.",
              },
              {
                title: "Evolução contínua",
                text: "Bases que podem crescer sem perder organização e coerência.",
              },
            ].map((item) => (
              <div key={item.title} className={`${softCard} p-5`}>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
