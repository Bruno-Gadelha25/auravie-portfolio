import type { Metadata } from "next";
import { BrainCircuit, ArrowRight, Cpu, DatabaseZap, FileSearch, Workflow } from "lucide-react";
import { ContactBanner } from "@/components/contact-banner";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";
import { primaryButton, sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Experimentos com IA",
  description:
    "Assistentes, automações e serviços locais de IA construídos para organização de conhecimento e suporte operacional.",
};

const jullinhaProject = projects.find((project) => project.slug === "jullinha-ai");

const supportingModules = [
  {
    title: "Organização de conhecimento",
    text: "A base foi pensada para conectar memória, Obsidian e relatórios de forma consistente.",
    icon: DatabaseZap,
  },
  {
    title: "Pesquisa e navegação",
    text: "A camada de pesquisa apoia consultas, leitura de páginas e ingestão controlada.",
    icon: FileSearch,
  },
  {
    title: "Automações",
    text: "Fluxos internos ajudam a separar aprovações, tarefas e rotinas operacionais.",
    icon: Workflow,
  },
  {
    title: "IA local",
    text: "A arquitetura também considera uso de modelos locais e processamento no ambiente próprio.",
    icon: Cpu,
  },
];

export default function ExperimentosComIaPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-100">
                  Experimentos com IA
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Assistentes, memória e automações com foco operacional.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                A frente de IA do portfólio reúne a camada de assistente, serviços de
                pesquisa e componentes que ajudam a organizar informação e apoiar
                processos internos.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#jullinha" className={primaryButton}>
                  Ver Jullinha.ai
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className={`${softCard} space-y-4 p-5`}>
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-violet-200" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Base em evolução
                </p>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                A Jullinha.ai representa a linha mais ambiciosa do ecossistema:
                conhecimento, relatórios, automação e integração com ferramentas
                locais.
              </p>
            </div>
          </div>
        </section>

        <section id="jullinha" className="space-y-8">
          <SectionHeading
            eyebrow="Projeto principal"
            title="Jullinha.ai"
            description="Assistente inteligente em desenvolvimento, criada para organização de conhecimento, automações, relatórios, integração com Obsidian e apoio operacional para pequenos negócios."
          />

          {jullinhaProject ? <ProjectCard project={jullinhaProject} /> : null}
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Componentes"
            title="O que compõe essa frente técnica"
            description="A camada de IA não depende de uma única ideia. Ela se apoia em módulos diferentes que organizam pesquisa, memória e operação."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportingModules.map((module) => {
              const Icon = module.icon;

              return (
                <div key={module.title} className={`${softCard} p-5`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-100">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {module.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {module.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <ContactBanner />
      </Container>
    </div>
  );
}
