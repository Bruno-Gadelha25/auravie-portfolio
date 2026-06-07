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
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Buscar por nome"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
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
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    active
                      ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white",
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
        <div className={`${sectionGlass} p-8 text-center text-slate-300`}>
          Nenhum projeto encontrado para o filtro atual.
        </div>
      ) : null}
    </div>
  );
}

