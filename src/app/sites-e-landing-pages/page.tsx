import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone, Sparkles } from "lucide-react";
import { ContactBanner } from "@/components/contact-banner";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";
import { primaryButton, sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Sites e Landing Pages",
  description:
    "Projetos de presença digital e páginas institucionais criados com foco em apresentação comercial, clareza e responsividade.",
};

const projectsInCategory = projects.filter(
  (project) => project.category === "Sites e Landing Pages",
);

export default function SitesLandingPagesPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
                  Sites e Landing Pages
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Presença digital com clareza, conversão e visual profissional.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Estrutura pensada para apresentar negócios, serviços e marcas de forma
                objetiva, com navegação simples e aparência sólida.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projetos" className={primaryButton}>
                  Ver todos os projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contato" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  Solicitar orçamento
                </Link>
              </div>
            </div>

            <div className={`${softCard} space-y-4 p-5`}>
              <div className="flex items-center gap-3">
                <Megaphone className="h-5 w-5 text-emerald-200" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Foco comercial
                </p>
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Esses projetos representam a frente mais próxima de clientes:
                apresentação de marca, organização da informação e imagem
                profissional.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SEO básico", "responsivo", "CTA claro", "apresentação limpa"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Destaques"
            title="Os projetos com melhor leitura para esta categoria"
            description="Essas páginas mostram a combinação entre apresentação visual, clareza de conteúdo e foco em presença comercial."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projectsInCategory.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">
                O que essa frente precisa mostrar
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-slate-300">
                Em sites institucionais, o mais importante é leitura rápida, proposta
                de valor clara e uma experiência que inspire confiança logo na
                primeira dobra.
              </p>
            </div>
          </div>
        </section>

        <ContactBanner />
      </Container>
    </div>
  );
}
