import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const staticRoutes = [
  "/",
  "/projetos",
  "/sites-e-landing-pages",
  "/projetos-web",
  "/experimentos-com-ia",
  "/infraestrutura-e-servidores",
  "/jornada",
  "/sobre",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.concat(projects.map((project) => project.detailsPath));

  return routes.map((route) => ({
    url: `${site.vercelProjectUrl}${route}`,
    lastModified: new Date(),
  }));
}
