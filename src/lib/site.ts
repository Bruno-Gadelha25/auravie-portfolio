import { publicSiteUrl } from "@/lib/portfolio";

export const site = {
  name: "Bruno Gadelha",
  shortName: "Bruno Gadelha",
  role: "DBA em formação",
  tagline: "Menos promessa, mais CSV.",
  // Preencher com o link do perfil do LinkedIn para o botão aparecer no site.
  linkedinUrl: "",
  description:
    "Bruno Gadelha, DBA em formação: banco de dados, Linux, homelab e IA local rodando em duas placas de vídeo em casa. Sites, dados e automações com prova.",
  githubProfileUrl: "https://github.com/Bruno-Gadelha25",
  contactEmail: "brunogadelha2005@gmail.com",
  whatsappUrl:
    "https://wa.me/5561984208604?text=Ol%C3%A1%2C%20Bruno%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.",
  vercelProjectSlug: "auravie-portfolio",
  vercelProjectUrl: publicSiteUrl,
};

export type SiteCategory = {
  label: string;
  slug: string;
  route: string;
  description: string;
  accent: string;
};

export const mainNav = [
  { label: "Julinha + Nexo", href: "/#julinha-nexo" },
  { label: "Projetos", href: "/projetos" },
  { label: "Jornada", href: "/jornada" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

export const siteCategories: SiteCategory[] = [
  {
    label: "Sites e Landing Pages",
    slug: "sites-e-landing-pages",
    route: "/sites-e-landing-pages",
    description:
      "Presença digital, páginas institucionais e vitrines comerciais com foco em clareza e apresentação.",
    accent: "emerald",
  },
  {
    label: "Projetos Web",
    slug: "projetos-web",
    route: "/projetos-web",
    description:
      "Aplicações web com interface moderna, lógica de produto e boa experiência de uso.",
    accent: "cyan",
  },
  {
    label: "Automações",
    slug: "automacoes",
    route: "/projetos?category=Automa%C3%A7%C3%B5es",
    description:
      "Fluxos de apoio operacional, integrações e rotinas que reduzem trabalho repetitivo.",
    accent: "amber",
  },
  {
    label: "Experimentos com IA",
    slug: "experimentos-com-ia",
    route: "/experimentos-com-ia",
    description:
      "Assistentes, pesquisa, memória, ingestão de conhecimento e serviços locais de IA.",
    accent: "violet",
  },
  {
    label: "Banco de Dados",
    slug: "banco-de-dados",
    route: "/projetos?category=Banco%20de%20Dados",
    description:
      "Modelagem, SQL, MySQL e PostgreSQL: o que eu estudo no curso, aplicado em projetos.",
    accent: "red",
  },
  {
    label: "Dashboards e Dados",
    slug: "dashboards-e-dados",
    route: "/projetos?category=Dashboards%20e%20Dados",
    description:
      "Visualização, análise e leitura de dados para decisões e estudos de caso.",
    accent: "sky",
  },
  {
    label: "Infraestrutura e Servidores",
    slug: "infraestrutura-e-servidores",
    route: "/infraestrutura-e-servidores",
    description:
      "Ambiente local, redes, SSH, automação e hospedagem de testes e estudos.",
    accent: "rose",
  },
  {
    label: "Projetos em Desenvolvimento",
    slug: "projetos-em-desenvolvimento",
    route: "/projetos?category=Projetos%20em%20Desenvolvimento",
    description:
      "Bases em evolução, versões intermediarias e iniciativas que ainda estão amadurecendo.",
    accent: "teal",
  },
];
