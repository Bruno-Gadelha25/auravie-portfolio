export const site = {
  name: "Auravie Portfolio",
  shortName: "Auravie",
  description:
    "Portfólio profissional para reunir sites, landing pages, projetos web, automações, experimentos com IA e infraestrutura local de estudos.",
  githubProfileUrl: "https://github.com/Bruno-Gadelha25",
  contactEmail: "brunogadelha2005@gmail.com",
  whatsappUrl:
    "https://wa.me/5561984208604?text=Ol%C3%A1%2C%20Bruno%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.",
  vercelProjectSlug: "auravie-portfolio",
  vercelProjectUrl: "https://auravie-portfolio.vercel.app",
};

export type SiteCategory = {
  label: string;
  slug: string;
  route: string;
  description: string;
  accent: string;
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sites e Landing Pages", href: "/sites-e-landing-pages" },
  { label: "Projetos Web", href: "/projetos-web" },
  { label: "Experimentos com IA", href: "/experimentos-com-ia" },
  { label: "Infraestrutura e Servidores", href: "/infraestrutura-e-servidores" },
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
