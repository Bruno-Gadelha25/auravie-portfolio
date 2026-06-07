export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectScreenshotSet = {
  desktop: ProjectScreenshot;
  mobile: ProjectScreenshot;
};

const projectScreenshotSets: Record<string, ProjectScreenshotSet> = {
  "auravie-portfolio": {
    desktop: {
      src: "/projects/screenshots/auravie-portfolio/desktop.jpg",
      alt: "Captura desktop da página inicial do Auravie Portfolio, com hero, métricas e destaques do portfólio.",
    },
    mobile: {
      src: "/projects/screenshots/auravie-portfolio/mobile.jpg",
      alt: "Captura mobile da página inicial do Auravie Portfolio, com a versão responsiva do hero e dos destaques.",
    },
  },
  "construfort-materiais": {
    desktop: {
      src: "/projects/screenshots/construfort-materiais/desktop.jpg",
      alt: "Captura desktop da landing page ConstruFort Materiais, com hero comercial e chamadas de ação visíveis.",
    },
    mobile: {
      src: "/projects/screenshots/construfort-materiais/mobile.jpg",
      alt: "Captura mobile da landing page ConstruFort Materiais, com a versão responsiva da apresentação comercial.",
    },
  },
  "corte-nobre-barbearia": {
    desktop: {
      src: "/projects/screenshots/corte-nobre-barbearia/desktop.jpg",
      alt: "Captura desktop do site Corte Nobre Barbearia, com apresentação institucional e navegação principal.",
    },
    mobile: {
      src: "/projects/screenshots/corte-nobre-barbearia/mobile.jpg",
      alt: "Captura mobile do site Corte Nobre Barbearia, com a versão responsiva da apresentação institucional.",
    },
  },
  "padaria-jocker": {
    desktop: {
      src: "/projects/screenshots/padaria-jocker/desktop.jpg",
      alt: "Captura desktop do site Padaria Jocker, com hero comercial e chamadas de pedido pelo WhatsApp.",
    },
    mobile: {
      src: "/projects/screenshots/padaria-jocker/mobile.jpg",
      alt: "Captura mobile do site Padaria Jocker, com a versão responsiva da vitrine comercial.",
    },
  },
};

export function getProjectScreenshots(slug: string) {
  return projectScreenshotSets[slug] ?? null;
}
