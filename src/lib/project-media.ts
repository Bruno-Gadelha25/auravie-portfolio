export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectScreenshotSet = {
  desktop: ProjectScreenshot;
  mobile: ProjectScreenshot;
};

const projectScreenshotSets: Record<string, ProjectScreenshotSet> = {
  "app-agendamento": {
    desktop: { src: "/projects/screenshots/app-agendamento/desktop.jpg", alt: "Página inicial do site App de Agendamento no computador." },
    mobile: { src: "/projects/screenshots/app-agendamento/mobile.jpg", alt: "Página inicial do site App de Agendamento no celular." },
  },
  "almeida-costa-advocacia": {
    desktop: { src: "/projects/screenshots/almeida-costa-advocacia/desktop.jpg", alt: "Página inicial do site Almeida & Costa Advocacia no computador." },
    mobile: { src: "/projects/screenshots/almeida-costa-advocacia/mobile.jpg", alt: "Página inicial do site Almeida & Costa Advocacia no celular." },
  },
  "odonto-prime": {
    desktop: { src: "/projects/screenshots/odonto-prime/desktop.jpg", alt: "Página inicial do site Odonto Prime no computador." },
    mobile: { src: "/projects/screenshots/odonto-prime/mobile.jpg", alt: "Página inicial do site Odonto Prime no celular." },
  },
  "vetprime": {
    desktop: { src: "/projects/screenshots/vetprime/desktop.jpg", alt: "Página inicial do site VetPrime no computador." },
    mobile: { src: "/projects/screenshots/vetprime/mobile.jpg", alt: "Página inicial do site VetPrime no celular." },
  },
  "belle-essence": {
    desktop: { src: "/projects/screenshots/belle-essence/desktop.jpg", alt: "Página inicial do site Belle Essence no computador." },
    mobile: { src: "/projects/screenshots/belle-essence/mobile.jpg", alt: "Página inicial do site Belle Essence no celular." },
  },
  "luna-pop-wear": {
    desktop: { src: "/projects/screenshots/luna-pop-wear/desktop.jpg", alt: "Página inicial do site Luna Pop Wear no computador." },
    mobile: { src: "/projects/screenshots/luna-pop-wear/mobile.jpg", alt: "Página inicial do site Luna Pop Wear no celular." },
  },
  "torque-garage": {
    desktop: { src: "/projects/screenshots/torque-garage/desktop.jpg", alt: "Página inicial do site Torque Garage no computador." },
    mobile: { src: "/projects/screenshots/torque-garage/mobile.jpg", alt: "Página inicial do site Torque Garage no celular." },
  },
  "amigo-pet": {
    desktop: { src: "/projects/screenshots/amigo-pet/desktop.jpg", alt: "Página inicial do site Amigo Pet no computador." },
    mobile: { src: "/projects/screenshots/amigo-pet/mobile.jpg", alt: "Página inicial do site Amigo Pet no celular." },
  },
  "academia": {
    desktop: { src: "/projects/screenshots/academia/desktop.jpg", alt: "Página inicial do site Academia no computador." },
    mobile: { src: "/projects/screenshots/academia/mobile.jpg", alt: "Página inicial do site Academia no celular." },
  },
  "techstore": {
    desktop: { src: "/projects/screenshots/techstore/desktop.jpg", alt: "Página inicial do site TechStore no computador." },
    mobile: { src: "/projects/screenshots/techstore/mobile.jpg", alt: "Página inicial do site TechStore no celular." },
  },
  "weblue": {
    desktop: { src: "/projects/screenshots/weblue/desktop.jpg", alt: "Página inicial do site WeBlue no computador." },
    mobile: { src: "/projects/screenshots/weblue/mobile.jpg", alt: "Página inicial do site WeBlue no celular." },
  },
  "nexo-dual-gpu-lab": {
    desktop: { src: "/projects/nexo/gpu-control.png", alt: "NEXO GPU Control mostrando a GTX 970 e a GTX 750 Ti juntas perto de 100% de uso no mesmo cálculo." },
    mobile: { src: "/projects/nexo/infografico.png", alt: "Infográfico do NEXO DUAL GPU LAB: 57,9 ms só na 750 Ti, 23,6 ms só na 970, 20,3 ms nas duas." },
  },
  "void-store": {
    desktop: {
      src: "/projects/void-store/preview.png",
      alt: "Captura desktop da Void Store, com hero gamer, navegação principal e vitrine de ofertas.",
    },
    mobile: {
      src: "/projects/void-store/mobile.png",
      alt: "Captura mobile da Void Store, com a versão responsiva da vitrine gamer e das ofertas.",
    },
  },
  "void-sudoku": {
    desktop: {
      src: "/projects/void-sudoku/preview.png",
      alt: "Captura desktop do Void Sudoku, com a tela inicial do jogo e o tabuleiro em destaque.",
    },
    mobile: {
      src: "/projects/void-sudoku/mobile.png",
      alt: "Captura mobile do Void Sudoku, com a experiência responsiva do puzzle.",
    },
  },
  "jullinha-ai": {
    desktop: {
      src: "/projects/nexo/interface-hud.png",
      alt: "Interface atual do Nexo: esfera de partículas no centro e, no canto, o uso do processador, da memória e das duas placas de vídeo.",
    },
    mobile: {
      src: "/projects/jullinha-ai/mobile.png",
      alt: "Captura mobile da Jullinha.ai, com a versão responsiva do painel da assistente.",
    },
  },
  "dashboard-netflix": {
    desktop: {
      src: "/projects/screenshots/dashboard-netflix/desktop.png",
      alt: "Captura desktop do Dashboard Netflix, com indicadores, linha temporal e gráficos de storytelling de dados.",
    },
    mobile: {
      src: "/projects/screenshots/dashboard-netflix/mobile.png",
      alt: "Captura mobile do Dashboard Netflix, com a versão responsiva da análise do catálogo.",
    },
  },
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
