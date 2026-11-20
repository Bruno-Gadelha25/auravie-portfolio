"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { siteCategories } from "@/lib/site";
import type { PortfolioProject } from "@/lib/projects";
import { sectionGlass } from "@/lib/ui";

type ProjectBrowserProps = {
  projects: PortfolioProject[];
  initialCategory?: string;
};

const categories = ["Todos", ...siteCategories.map((category) => category.label)];

export function ProjectBrowser({
  projects,
  initialCategory = "Todos",
}: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProjects = projects.filter((project) => {
    const matchesQuery = project.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      activeCategory === "Todos" || project.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className={`${sectionGlass} p-4 sm:p-5`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              placeholder="Buscar por nome"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-md border border-line bg-ink/80 py-3 pl-11 pr-4 text-sm text-bone outline-none placeholder:text-muted focus:border-line focus:ring-2 focus:ring-cyan/30"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-sm border px-4 py-2 text-sm font-medium transition",
                    active
                      ? "border-line bg-cyan/10 text-cyan"
                      : "border-line bg-panel-2 text-muted hover:border-bone/40 hover:bg-panel-2 hover:text-bone",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className={`${sectionGlass} p-8 text-center text-muted`}>
          Nenhum projeto encontrado para o filtro atual.
        </div>
      ) : null}
    </div>
  );
}

