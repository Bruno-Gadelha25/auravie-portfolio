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
  showPreview?: boolean;
  risks: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  detailsPath: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "auravie-portfolio",
    name: "Auravie Portfolio",
    category: "Sites e Landing Pages",
    type: "Portfólio profissional / site institucional",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Este site. Visual de terminal com a identidade das minhas placas de vídeo, linha do tempo da Julinha + Nexo e formulário de contato que manda a mensagem pronta para o WhatsApp ou o e-mail.",
    improvements: [
      "Adicionar estudos de caso visuais",
      "Incluir capturas das entregas principais",
      "Evoluir as páginas individuais com mais contexto comercial",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "Requer curadoria contínua para manter a leitura profissional",
      "A estrutura deve crescer sem perder simplicidade",
    ],
    githubUrl: "https://github.com/Bruno-Gadelha25/auravie-portfolio",
    demoUrl: site.vercelProjectUrl,
    detailsPath: "/projetos/auravie-portfolio",
  },
  {
    slug: "dashboard-netflix",
    name: "Dashboard Netflix - Storytelling de Dados",
    category: "Dashboards e Dados",
    type: "Dashboard de análise de dados / storytelling",
    technologies: ["Python", "Pandas", "SQLite", "Plotly", "Streamlit", "Vercel"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Dashboard visual do catálogo da Netflix com linha temporal, filtros, indicadores principais e conclusão automática baseada em storytelling de dados.",
    improvements: [
      "Adicionar novas métricas comparativas por período",
      "Expandir a leitura por país e gênero",
      "Evoluir a vitrine pública com mais capturas do dashboard",
    ],
    publishGithub: true,
    deployVercel: true,
    risks: [
      "A versão pública na Vercel é uma vitrine estática",
      "A análise interativa completa roda na aplicação Streamlit",
    ],
    githubUrl: "https://github.com/Bruno-Gadelha25/dashboard-netflix-storytelling",
    demoUrl: "https://dashboard-netflix-python.vercel.app",
    detailsPath: "/projetos/dashboard-netflix",
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
      "Landing page institucional com foco em apresentação comercial, clareza e narrativa de marca.",
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
    githubUrl: "https://github.com/Bruno-Gadelha25/construfort-portfolio",
    demoUrl: "https://construfort-portfolio.vercel.app",
    detailsPath: "/projetos/construfort-materiais",
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
      "Site de barbearia com presença visual forte, foco comercial e navegação direta para conversão.",
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
    githubUrl: "https://github.com/Bruno-Gadelha25/Barbearia-Nobre",
    demoUrl: "https://barbearia-nobre-ten.vercel.app/",
    detailsPath: "/projetos/corte-nobre-barbearia",
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
    githubUrl: "https://github.com/Bruno-Gadelha25/Padaria-Jocker",
    demoUrl: "https://padaria-jocker.vercel.app",
    detailsPath: "/projetos/padaria-jocker",
  },
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
    publishGithub: false,
    deployVercel: true,
    risks: [
      "Há várias versões do mesmo produto",
      "Arquivos locais precisam de revisão antes da publicação",
    ],
    githubUrl: null,
    demoUrl: "https://void-store-live.vercel.app",
    detailsPath: "/projetos/void-store",
  },
  {
    slug: "void-sudoku",
    name: "Void Sudoku",
    category: "Projetos Web",
    type: "Jogo web / puzzle interativo",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide"],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Jogo de Sudoku com interface moderna e bom potencial de demonstração front-end.",
    improvements: [
      "Adicionar níveis de dificuldade",
      "Criar histórico de partidas",
      "Refinar microinterações",
    ],
    publishGithub: false,
    deployVercel: true,
    risks: [
      "Poucos riscos",
      "Vale revisar a experiência final e as telas públicas",
    ],
    githubUrl: null,
    demoUrl: "https://void-sudoku.vercel.app",
    detailsPath: "/projetos/void-sudoku",
  },
  {
    slug: "jullinha-ai",
    name: "Julinha + Nexo",
    category: "Experimentos com IA",
    type: "Dois assistentes de IA rodando em casa, com voz, memória e app Android",
    technologies: [
      "Node.js",
      "Python",
      "Ollama",
      "Qwen3",
      "Whisper",
      "Kokoro TTS",
      "React",
      "WebGL",
      "ChromaDB",
      "Obsidian",
      "Android",
      "Tailscale",
    ],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Julinha e Nexo são dois assistentes de IA que rodam no meu PC, sem depender da nuvem: escutam, respondem com voz, lembram das conversas e dividem o trabalho entre duas placas de vídeo. Começou num protótipo de voz em maio de 2026 e hoje tem interface própria, app Android e servidor no celular.",
    improvements: [
      "Publicar uma versão pública sem dados pessoais",
      "Gravar uma demonstração completa com voz",
      "Documentar a arquitetura em diagrama",
    ],
    publishGithub: false,
    deployVercel: false,
    risks: ["Código privado: contém memória e configurações pessoais"],
    githubUrl: null,
    demoUrl: null,
    detailsPath: "/projetos/jullinha-ai",
  },
  {
    slug: "servidor-local-homelab",
    name: "Servidor Local / Homelab",
    category: "Infraestrutura e Servidores",
    type: "Ambiente local de estudos e desenvolvimento",
    technologies: [
      "Ubuntu Server 25.10",
      "SSH",
      "Tailscale",
      "Docker",
      "Wake-on-LAN",
      "Rede local",
      "IA local",
    ],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Servidor em casa com Ubuntu Server 25.10, acesso por SSH e Tailscale, serviços em Docker e Wake-on-LAN. É onde eu estudo Linux, redes e banco de dados na prática e onde os assistentes de IA rodam.",
    improvements: [
      "Documentar o desenho da infraestrutura",
      "Separar serviços públicos de privados",
      "Preparar diagramas e inventário de serviços",
    ],
    publishGithub: false,
    deployVercel: false,
    showPreview: false,
    risks: [
      "Pode expor configuração local",
      "Pode revelar integrações e fluxos internos",
    ],
    githubUrl: null,
    demoUrl: null,
    detailsPath: "/projetos/servidor-local-homelab",
  },
  {
    slug: "nexo-dual-gpu-lab",
    name: "NEXO DUAL GPU LAB",
    category: "Infraestrutura e Servidores",
    type: "Computação em duas placas de vídeo diferentes com Direct3D 12",
    technologies: ["C++", "Direct3D 12", "HLSL", "DXGI", "PowerShell", "CSV"],
    status: "em andamento",
    portfolioPotential: "alto",
    summary:
      "Um PC de 2012 com uma GTX 970 e uma GTX 750 Ti trabalhando juntas no mesmo cálculo. Dividi o trabalho pela velocidade medida de cada placa: 23,6 ms só com a 970, 20,3 ms com as duas. Todos os 8 milhões de resultados conferidos, e cada número tem CSV.",
    improvements: [],
    publishGithub: true,
    deployVercel: false,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/nexo-dual-gpu-lab",
    demoUrl: null,
    detailsPath: "/projetos/nexo-dual-gpu-lab",
  },
  {
    slug: "clinica-veterinaria-db",
    name: "Clínica Veterinária: banco de dados",
    category: "Banco de Dados",
    type: "Modelagem e implementação de banco MySQL",
    technologies: ["MySQL", "Modelagem ER", "Normalização", "Triggers", "Views", "Procedures"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Banco de dados completo para uma clínica veterinária: modelo entidade-relacionamento, normalização, chaves e restrições, triggers, views e procedures, com o motivo de cada decisão explicado.",
    improvements: [],
    publishGithub: true,
    deployVercel: false,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/clinica-veterinaria-db",
    demoUrl: null,
    detailsPath: "/projetos/clinica-veterinaria-db",
  },
  {
    slug: "api-simples",
    name: "API de usuários",
    category: "Banco de Dados",
    type: "API REST com Node.js e PostgreSQL",
    technologies: ["Node.js", "Express", "PostgreSQL", "SQL", "REST"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "API REST de usuários com Node.js, Express e PostgreSQL: listar, cadastrar e remover, com consultas parametrizadas no banco.",
    improvements: [],
    publishGithub: true,
    deployVercel: false,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/api-simples",
    demoUrl: null,
    detailsPath: "/projetos/api-simples",
  },
  {
    slug: "app-agendamento",
    name: "Cadeira: agendamento online",
    category: "Projetos Web",
    type: "Agendamento online para pequenos negócios",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Vercel"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Sistema de agendamento online para pequenos negócios: o cliente escolhe serviço e horário, e o dono vê a agenda. Banco Postgres na Neon e deploy na Vercel.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://app-agendamento-gray.vercel.app",
    detailsPath: "/projetos/app-agendamento",
  },
  {
    slug: "weblue",
    name: "WeBlue",
    category: "Projetos Web",
    type: "E-commerce de cosméticos (Laboratório de Inovação III)",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Loja virtual de cosméticos feita para a disciplina Laboratório de Inovação III do Senac.",
    improvements: [],
    publishGithub: true,
    deployVercel: true,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/WeBlue",
    demoUrl: "https://weblue-rho.vercel.app",
    detailsPath: "/projetos/weblue",
  },
  {
    slug: "almeida-costa-advocacia",
    name: "Almeida & Costa Advocacia",
    category: "Sites e Landing Pages",
    type: "Site para escritório de advocacia (Sites Express)",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site institucional para escritório de advocacia: áreas de atuação, equipe e contato direto pelo WhatsApp.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://almeida-costa-advocacia.vercel.app",
    detailsPath: "/projetos/almeida-costa-advocacia",
  },
  {
    slug: "odonto-prime",
    name: "Odonto Prime",
    category: "Sites e Landing Pages",
    type: "Site para clínica odontológica (Sites Express)",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de clínica odontológica com tratamentos, equipe e agendamento pelo WhatsApp.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://odonto-prime-kappa.vercel.app",
    detailsPath: "/projetos/odonto-prime",
  },
  {
    slug: "vetprime",
    name: "VetPrime",
    category: "Sites e Landing Pages",
    type: "Site para clínica veterinária (Sites Express)",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de clínica veterinária com serviços, emergência 24h e contato rápido.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://vetprime-clinica-veterinaria.vercel.app",
    detailsPath: "/projetos/vetprime",
  },
  {
    slug: "belle-essence",
    name: "Belle Essence",
    category: "Sites e Landing Pages",
    type: "Loja de skincare e beleza (Sites Express)",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Vitrine de loja de skincare e beleza, com catálogo e pedido pelo WhatsApp.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://belle-essence-self.vercel.app",
    detailsPath: "/projetos/belle-essence",
  },
  {
    slug: "luna-pop-wear",
    name: "Luna Pop Wear",
    category: "Sites e Landing Pages",
    type: "Loja de moda (Sites Express)",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Vitrine de loja de moda jovem, com coleções e pedido pelo WhatsApp.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://luna-pop-wear.vercel.app",
    detailsPath: "/projetos/luna-pop-wear",
  },
  {
    slug: "torque-garage",
    name: "Torque Garage",
    category: "Sites e Landing Pages",
    type: "Site para oficina mecânica (Sites Express)",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de oficina mecânica com serviços, diferenciais e orçamento pelo WhatsApp.",
    improvements: [],
    publishGithub: false,
    deployVercel: true,
    risks: [],
    githubUrl: null,
    demoUrl: "https://torque-garage-auto-center.vercel.app",
    detailsPath: "/projetos/torque-garage",
  },
  {
    slug: "amigo-pet",
    name: "Amigo Pet",
    category: "Sites e Landing Pages",
    type: "Site para pet shop",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de pet shop com serviços, depoimentos e contato pelo WhatsApp.",
    improvements: [],
    publishGithub: true,
    deployVercel: true,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/Amigo-pet",
    demoUrl: "https://amigo-pet-mu.vercel.app",
    detailsPath: "/projetos/amigo-pet",
  },
  {
    slug: "academia",
    name: "Academia",
    category: "Sites e Landing Pages",
    type: "Site para academia",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Site de academia com planos, benefícios e matrícula pelo WhatsApp.",
    improvements: [],
    publishGithub: true,
    deployVercel: true,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/Academia",
    demoUrl: "https://academia-red-mu.vercel.app",
    detailsPath: "/projetos/academia",
  },
  {
    slug: "techstore",
    name: "TechStore",
    category: "Sites e Landing Pages",
    type: "Site para loja de eletrônicos",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    status: "pronto",
    portfolioPotential: "alto",
    summary:
      "Vitrine de loja de eletrônicos com produtos organizados e venda pelo WhatsApp.",
    improvements: [],
    publishGithub: true,
    deployVercel: true,
    risks: [],
    githubUrl: "https://github.com/Bruno-Gadelha25/TechStore",
    demoUrl: "https://tech-store-jet-rho.vercel.app",
    detailsPath: "/projetos/techstore",
  },
];

export const featuredProjectSlugs = [
  "jullinha-ai",
  "nexo-dual-gpu-lab",
  "clinica-veterinaria-db",
  "dashboard-netflix",
  "api-simples",
  "servidor-local-homelab",
] as const;

// Ordem de exibição: destaques primeiro, depois a ordem do arquivo.
projects.sort((a, b) => {
  const rank = (slug: string) => {
    const index = (featuredProjectSlugs as readonly string[]).indexOf(slug);
    return index === -1 ? featuredProjectSlugs.length : index;
  };
  return rank(a.slug) - rank(b.slug);
});

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
