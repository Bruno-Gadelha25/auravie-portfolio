import { site } from "@/lib/site";

export type ProjectStatus = "pronto" | "em andamento" | "precisa revisar";
export type PortfolioPotential = "alto" | "médio" | "baixo";

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  type: string;
  technologies: string[];
  status: ProjectStatus;
  portfolioPotential: PortfolioPotential;
  summary: string;
  improvements: string[];
  publishGithub: boolean;
  deployVercel: boolean;
  risks: string[];
  githubUrl: string;
  demoPath: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "void-store",
    name: "Void Store",
    category: "Projetos Web",
    type: "Marketplace / e-commerce full-stack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Express",
      "Docker",
      "Tailwind CSS",
      "Recharts",
    ],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Plataforma de comércio digital com catálogo, checkout, área administrativa e persistência de dados.",
    improvements: [
      "Consolidar a melhor versão da base",
      "Remover artefatos locais antes da publicação",
      "Padronizar documentação e screenshots",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "Há várias versões do mesmo produto",
      "Arquivos locais precisam de revisão antes da publicação",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/void-store",
  },
  {
    slug: "jullinha-ai",
    name: "Jullinha.ai",
    category: "Projetos em Desenvolvimento",
    type: "Assistente inteligente modular / ecossistema de automações",
    technologies: [
      "Node.js",
      "Express",
      "OpenAI",
      "MCP SDK",
      "Playwright",
      "Ollama",
      "Python",
      "FastAPI",
      "Obsidian",
      "Markdown",
      "JSON",
    ],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Assistente inteligente em desenvolvimento, criada para organização de conhecimento, automações, relatórios, integração com Obsidian e apoio operacional para pequenos negócios.",
    improvements: [
      "Criar uma camada pública sanitizada",
      "Documentar a arquitetura principal",
      "Separar melhor o core dos módulos de suporte",
    ],
    publishGithub: true,
    deployVercel: false,
    risks: [
      "Escopo amplo",
      "Dependência forte de componentes locais e operacionais",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/jullinha-ai",
  },
  {
    slug: "servidor-local-homelab",
    name: "Servidor Local / Homelab",
    category: "Infraestrutura e Servidores",
    type: "Ambiente local de estudos e desenvolvimento",
    technologies: [
      "TypeScript",
      "Node.js",
      "Módulos de backend",
      "Autenticação",
      "Storage",
      "Voz",
      "Imagem",
      "tRPC",
    ],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Ambiente local de estudos e desenvolvimento utilizado para Linux, redes, SSH, acesso remoto, automações, hospedagem local, organização de projetos e experimentos com IA.",
    improvements: [
      "Documentar o desenho da infraestrutura",
      "Separar serviços públicos de privados",
      "Preparar diagramas e inventário de serviços",
    ],
    publishGithub: true,
    deployVercel: false,
    risks: [
      "Pode expor configuração local",
      "Pode revelar integrações e fluxos internos",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/servidor-local-homelab",
  },
  {
    slug: "construfort-materiais",
    name: "ConstruFort Materiais",
    category: "Sites e Landing Pages",
    type: "Landing page institucional / case study",
    technologies: ["HTML", "CSS", "JavaScript", "SEO estático", "Vercel"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Landing page institucional com foco em apresentação comercial e narrativa de marca.",
    improvements: [
      "Fortalecer prova social",
      "Enriquecer a seção de resultados",
      "Destacar melhor o contexto de negócio",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "Baixo risco",
      "Revisar mídia e texto público antes da divulgação",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/construfort-materiais",
  },
  {
    slug: "padaria-jocker",
    name: "Padaria Jocker",
    category: "Sites e Landing Pages",
    type: "Site institucional local / vitrine comercial",
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Motion", "Lucide"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de padaria com foco em presença local, visual atraente e apresentação comercial.",
    improvements: [
      "Adicionar CTA mais claro",
      "Inserir cardápio resumido",
      "Criar seção de depoimentos",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "Revisar imagens",
      "Revisar identidade visual antes de publicar publicamente",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/padaria-jocker",
  },
  {
    slug: "corte-nobre-barbearia",
    name: "Corte Nobre Barbearia",
    category: "Sites e Landing Pages",
    type: "Site institucional local / presença comercial",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Motion",
      "Lucide",
    ],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de barbearia com presença visual forte e perfil comercial bem definido.",
    improvements: [
      "Melhorar SEO local",
      "Destacar agendamento",
      "Reforçar prova social",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "Rever integrações",
      "Rever possíveis configurações de ambiente antes da publicação",
    ],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/corte-nobre-barbearia",
  },
  {
    slug: "void-sudoku",
    name: "Void Sudoku",
    category: "Projetos Web",
    type: "Jogo web / puzzle interativo",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Jogo de Sudoku com interface moderna e bom potencial de demonstração front-end.",
    improvements: [
      "Adicionar níveis de dificuldade",
      "Criar histórico de partidas",
      "Refinar microinterações",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: ["Poucos riscos", "Vale revisar a experiência final e as telas públicas"],
    githubUrl: site.githubProfileUrl,
    demoPath: "/projetos/void-sudoku",
  },
];

export const featuredProjectSlugs = [
  "construfort-materiais",
  "corte-nobre-barbearia",
  "padaria-jocker",
  "void-store",
  "jullinha-ai",
  "servidor-local-homelab",
  "void-sudoku",
] as const;

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, PortfolioProject>;

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projectsBySlug[slug])
  .filter(Boolean);

export const publishedProjects = projects.filter((project) => project.deployVercel);

export const uniqueTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies)),
).sort((a, b) => a.localeCompare(b));

export function getProjectBySlug(slug: string) {
  return projectsBySlug[slug];
}

export function getProjectsByCategory(category: string) {
  if (!category || category === "Todos") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}
