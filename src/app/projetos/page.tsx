import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectBrowser } from "@/components/project-browser";
import { SectionHeading } from "@/components/section-heading";
import { projects, publishedProjects } from "@/lib/projects";
import { site, siteCategories } from "@/lib/site";
import { sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Lista completa dos projetos do Auravie Portfolio, com busca, filtro por categoria e destaque para os projetos publicados na Vercel.",
};

type ProjectsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const requestedCategory = searchParams?.category
    ? decodeURIComponent(searchParams.category)
    : "Todos";
  const validCategories = ["Todos", ...siteCategories.map((category) => category.label)];
  const initialCategory = validCategories.includes(requestedCategory)
    ? requestedCategory
    : "Todos";

  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <SectionHeading
              eyebrow="Projetos"
              title="Lista completa com busca e filtro por categoria"
              description="Aqui estão os projetos escolhidos para o portfólio, com destaque para os que já podem ser apresentados publicamente."
            >
              <div className="flex flex-wrap gap-3 pt-2">
                <span className={`${softCard} px-4 py-2 text-sm text-slate-200`}>
                  {projects.length} projetos
                </span>
                <span className={`${softCard} px-4 py-2 text-sm text-slate-200`}>
                  {publishedProjects.length} publicados na Vercel
                </span>
                <span className={`${softCard} px-4 py-2 text-sm text-slate-200`}>
                  {siteCategories.length} categorias de navegação
                </span>
              </div>
            </SectionHeading>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Organização
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {site.shortName} concentra as entregas mais fortes em uma estrutura
                pensada para leitura rápida, comparação de projetos e apresentação
                profissional.
              </p>
            </div>
          </div>
        </section>

        <ProjectBrowser projects={projects} initialCategory={initialCategory} />
      </Container>
    </div>
  );
}

