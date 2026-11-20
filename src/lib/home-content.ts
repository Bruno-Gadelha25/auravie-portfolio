export type Persona = "julinha" | "nexo" | "ambos" | "gpu";

export type TimelineStep = {
  date: string;
  title: string;
  text: string;
  who: Persona;
};

// Datas conferidas nos arquivos do acervo (JULINHA_NEXO_ACERVO_AUDITORIA).
export const aiTimeline: TimelineStep[] = [
  {
    date: "14 mai 2026",
    title: "A Julinha nasce",
    text: "Protótipo de voz com Piper e Ollama num notebook. No mesmo dia, o primeiro áudio gerado por ela.",
    who: "julinha",
  },
  {
    date: "18 mai 2026",
    title: "Escuta, pensa e responde",
    text: "Pipeline completo: microfone, transcrição, modelo de linguagem, ferramentas e resposta falada.",
    who: "julinha",
  },
  {
    date: "set 2026",
    title: "Ganha memória",
    text: "Livro de Conhecimento e um segundo cérebro com Obsidian e ChromaDB, para lembrar do que já foi conversado.",
    who: "julinha",
  },
  {
    date: "8 out 2026",
    title: "Chega o Nexo",
    text: "Assistente próprio em Python, com Ollama, busca nos documentos (RAG), memória, voz e o primeiro orbe animado.",
    who: "nexo",
  },
  {
    date: "16 out 2026",
    title: "Julinha OS",
    text: "Os dois num só sistema, que troca de motor de IA conforme a tarefa. Hoje são mais de 70 commits.",
    who: "ambos",
  },
  {
    date: "out–nov 2026",
    title: "No bolso",
    text: "App Android próprio (até a versão 2.3) e um servidor rodando no celular, acessado de fora por túnel seguro.",
    who: "ambos",
  },
  {
    date: "12 nov 2026",
    title: "Cara nova",
    text: "Interface com uma esfera de 18 mil partículas que reage à voz e um painel com CPU, memória e placas de vídeo ao vivo.",
    who: "nexo",
  },
  {
    date: "19–20 nov 2026",
    title: "Duas placas de vídeo",
    text: "GTX 970 para conversar, GTX 750 Ti para voz e memória. Da fala até a resposta em voz: de uns 73 s para 6,4 s.",
    who: "gpu",
  },
];

export const personaColor: Record<Persona, string> = {
  julinha: "var(--pink)",
  nexo: "var(--cyan)",
  ambos: "var(--bone)",
  gpu: "var(--orange)",
};

export const gpuBenchmark = [
  { label: "Só GTX 750 Ti", ms: 57.9, color: "var(--cyan)" },
  { label: "Só GTX 970", ms: 23.6, color: "var(--orange)" },
  { label: "As duas juntas (71/29)", ms: 20.3, color: "var(--bone)" },
];

export const homelabStack = [
  "Ubuntu Server 25.10",
  "SSH",
  "Tailscale",
  "Docker",
  "Wake-on-LAN",
  "Ollama",
];

export const clientSiteSlugs = [
  "vetprime",
  "luna-pop-wear",
  "odonto-prime",
  "almeida-costa-advocacia",
  "torque-garage",
  "belle-essence",
  "corte-nobre-barbearia",
  "padaria-jocker",
  "construfort-materiais",
  "amigo-pet",
];

export const webAppSlugs = ["app-agendamento", "void-store", "void-sudoku", "weblue"];
