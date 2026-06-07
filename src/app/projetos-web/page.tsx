import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gamepad2, ShoppingBag } from "lucide-react";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";
import { primaryButton, sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Projetos Web",
  description:
    "Projetos web com interface moderna, lógica de produto e foco em demonstração técnica.",
};

const projectsInCategory = projects.filter((project) =>
  ["Void Store", "Void Sudoku"].includes(project.name),
);

export default function ProjectsWebPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Projetos Web
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Aplicações com mais densidade de produto e experiência.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Aqui entram os projetos web com maior camada de interface, estado e
                organização de fluxo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projetos" className={primaryButton}>
                  Ver todos os projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contato" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  Falar sobre um projeto
                </Link>
              </div>
            </div>

            <div className={`${softCard} space-y-4 p-5`}>
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-cyan-200" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Produto e interação
                </p>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Void Store e Void Sudoku mostram que a base vai além de páginas:
                também inclui lógica de produto, fluxo de usuário e experiência
                funcional.
              </p>
              <div className="flex flex-wrap gap-2">
                {["checkout", "catálogo", "dashboard", "jogo interativo"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Destaques"
            title="Os dois projetos que melhor representam essa frente"
            description="Aqui a proposta não é apenas mostrar interface, mas também como a aplicação organiza dados, fluxo e proposta de uso."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projectsInCategory.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="flex items-start gap-4">
            <Gamepad2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">
                Direção técnica
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-slate-300">
                O objetivo desses projetos é equilibrar interface, arquitetura e
                apresentação. Eles servem tanto como demonstração de front-end quanto
                como base para produtos maiores.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

