import type { PortfolioProject } from "@/lib/projects";

export type ProjectCaseContent = {
  title: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  commercialValue: string;
  technicalHighlights: string[];
  demonstrates: string[];
  statusNote: string;
};

const projectCases: Record<string, ProjectCaseContent> = {
  "dashboard-netflix": {
    title: "Dashboard Netflix - Storytelling de Dados",
    description:
      "Dashboard visual para análise do catálogo da Netflix com linha temporal, indicadores, rankings e conclusão baseada em storytelling de dados.",
    context:
      "O dataset da Netflix reúne filmes e séries de vários países, anos, gêneros e classificações. O desafio do projeto foi transformar essa base em uma leitura narrativa que mostrasse evolução temporal e padrões de conteúdo.",
    problem:
      "Não bastava empilhar gráficos soltos. A análise precisava responder uma pergunta central e conectar quantidade, tipo de conteúdo, origem geográfica e evolução histórica em uma mesma história visual.",
    solution:
      "Foi construído um dashboard em Streamlit com filtros laterais, indicadores principais, linha temporal, comparação entre filmes e séries, rankings de países e gêneros, análise de duração e uma conclusão automática baseada nos dados filtrados.",
    commercialValue:
      "O resultado demonstra domínio de análise de dados, organização visual e capacidade de transformar um dataset bruto em uma apresentação clara para estudo, portfólio ou tomada de decisão.",
    technicalHighlights: [
      "Python e Pandas para limpeza e análise",
      "SQLite para persistência estruturada",
      "Plotly para visualizações interativas",
      "Streamlit para dashboard web",
      "Vercel para vitrine pública do projeto",
    ],
    demonstrates: [
      "Storytelling de dados",
      "Leitura temporal do catálogo",
      "Filtros interativos",
      "Conclusão automática orientada por dados",
    ],
    statusNote: "Projeto pronto, com vitrine pública na Vercel e dashboard interativo em Streamlit.",
  },
  "construfort-materiais": {
    title: "ConstruFort Materiais",
    description:
      "Landing page institucional pensada para apresentar a empresa com clareza, boa leitura e foco comercial.",
    context:
      "A marca precisava de uma presença digital simples de entender, com estrutura suficiente para apresentar o negócio e orientar a primeira conversa com o cliente.",
    problem:
      "A comunicação digital precisava sair de uma apresentação dispersa e ganhar uma narrativa mais objetiva, responsiva e fácil de consultar em dispositivos móveis.",
    solution:
      "Foi criada uma landing page com hierarquia clara, blocos curtos de informação e chamadas de ação visíveis, priorizando leitura rápida e apresentação profissional.",
    commercialValue:
      "Para o cliente, o resultado é uma página mais convincente para divulgação, primeiro contato e apoio a vendas, sem depender de explicações longas.",
    technicalHighlights: [
      "Estrutura estática leve",
      "SEO básico",
      "Responsividade mobile",
      "Publicação na Vercel",
    ],
    demonstrates: [
      "Organização de informação",
      "Clareza comercial",
      "Navegação simples",
      "Apresentação profissional",
    ],
    statusNote: "Projeto pronto e publicado na Vercel.",
  },
  "corte-nobre-barbearia": {
    title: "Corte Nobre Barbearia",
    description:
      "Site institucional com identidade visual marcante e foco em conversão local.",
    context:
      "A barbearia precisava de uma presença digital capaz de transmitir posicionamento, reforçar confiança e facilitar o contato com novos clientes.",
    problem:
      "A apresentação precisava ser mais forte do que um cartão de visitas digital genérico, valorizando a marca e a experiência do serviço.",
    solution:
      "O site foi organizado para destacar a estética da barbearia, conduzir a navegação com fluidez e aproximar o usuário da ação de contato.",
    commercialValue:
      "Isso fortalece a percepção de qualidade, ajuda na captação local e oferece uma presença online que combina com o posicionamento da marca.",
    technicalHighlights: [
      "Base moderna com Vite e React",
      "Interface responsiva",
      "Animações com Motion",
      "Tailwind CSS para composição visual",
      "Apoio de Supabase",
    ],
    demonstrates: [
      "Design orientado ao público local",
      "Foco em conversão",
      "Composição visual mais premium",
      "Organização de front-end moderno",
    ],
    statusNote: "Projeto pronto e publicado na Vercel.",
  },
  "padaria-jocker": {
    title: "Padaria Jocker",
    description:
      "Vitrine comercial acolhedora para apresentar a padaria com clareza e boa leitura em qualquer tela.",
    context:
      "A padaria precisava de uma presença digital que transmitisse proximidade, apetite visual e confiança desde o primeiro contato.",
    problem:
      "Era importante comunicar produto e ambiente sem sobrecarregar a página, mantendo a experiência simples para o público local.",
    solution:
      "Foi construída uma vitrine com ritmo visual limpo, conteúdo direto e chamadas de ação discretas, pensada para consulta rápida no mobile.",
    commercialValue:
      "O site ajuda a reforçar marca, organizar a apresentação do negócio e apoiar divulgação com uma imagem mais profissional.",
    technicalHighlights: [
      "Base moderna com Vite e React",
      "Composição responsiva",
      "Movimento suave nas interações",
      "Tipografia e contraste ajustados",
    ],
    demonstrates: [
      "Apresentação comercial clara",
      "Experiência mobile fluida",
      "Visual convidativo",
      "Estrutura enxuta e objetiva",
    ],
    statusNote: "Projeto pronto e publicado na Vercel.",
  },
  "void-store": {
    title: "Void Store",
    description:
      "Marketplace full-stack em desenvolvimento, com foco em catálogo, checkout e área administrativa.",
    context:
      "O projeto explora uma base de e-commerce capaz de unir experiência do usuário, persistência de dados e operação administrativa em uma única estrutura.",
    problem:
      "O desafio era integrar front-end, back-end e armazenamento de dados sem perder clareza de interface nem comprometer a evolução do produto.",
    solution:
      "A solução foi organizada com Next.js, Prisma, Supabase, Express, Docker e Tailwind CSS, formando uma base preparada para catálogo, checkout e gerenciamento.",
    commercialValue:
      "Para um cliente, esse case mostra visão de produto, organização técnica e capacidade de construir uma base que pode evoluir em etapas.",
    technicalHighlights: [
      "Arquitetura com Next.js",
      "Persistência com Prisma e Supabase",
      "Serviços com Express",
      "Conteinerização com Docker",
      "Interface com Tailwind CSS",
    ],
    demonstrates: [
      "Visão de produto digital",
      "Organização de dados",
      "Integração full-stack",
      "Base para evolução comercial",
    ],
    statusNote: "Em desenvolvimento, com vitrine pública na Vercel.",
  },
  "jullinha-ai": {
    title: "Jullinha.ai",
    description:
      "Assistente inteligente em desenvolvimento para organização de conhecimento, automações e apoio operacional.",
    context:
      "O projeto nasceu da necessidade de transformar rotinas digitais em uma base mais centralizada, conectando conhecimento, tarefas e automações de forma mais inteligente.",
    problem:
      "As informações e ações estavam espalhadas entre ferramentas distintas, o que dificultava a organização e o acompanhamento consistente dos processos.",
    solution:
      "A Jullinha.ai está sendo construída como um ecossistema modular com Node.js, Express, OpenAI, MCP SDK, Playwright, Ollama, Python, FastAPI, Obsidian e Markdown.",
    commercialValue:
      "Para pequenos negócios, esse tipo de assistente pode reduzir dispersão operacional, organizar relatórios e apoiar tarefas recorrentes com mais consistência.",
    technicalHighlights: [
      "Arquitetura modular",
      "Integração com Obsidian",
      "Automação com Playwright",
      "Uso de IA local e remota",
      "Bases em Node.js e Python",
    ],
    demonstrates: [
      "Organização de conhecimento",
      "Automação orientada a processos",
      "Integração entre ferramentas",
      "Pensamento de produto com IA",
    ],
    statusNote: "Em desenvolvimento, com interface pública na Vercel e operação local em paralelo.",
  },
  "servidor-local-homelab": {
    title: "Servidor Local / Homelab",
    description:
      "Ambiente local de estudos e desenvolvimento para Linux, redes, acesso remoto, automações e IA.",
    context:
      "O homelab começou como uma forma prática de reaproveitar hardware e criar um espaço próprio para aprender e testar serviços.",
    problem:
      "Era necessário ter um ambiente controlado para estudar infraestrutura, validar configurações e experimentar ferramentas sem depender de um setup externo.",
    solution:
      "Foi montado um ambiente com Ubuntu Server, rede local, SSH, acesso remoto, armazenamento e automações, evoluindo para um laboratório pessoal de desenvolvimento.",
    commercialValue:
      "Esse tipo de base mostra autonomia técnica, responsabilidade com infraestrutura e capacidade de organizar ambientes para testes e evolução contínua.",
    technicalHighlights: [
      "Linux e Ubuntu Server",
      "SSH e acesso remoto",
      "Rede local",
      "Automação",
      "Experimentos com IA local",
    ],
    demonstrates: [
      "Aprendizado prático",
      "Fundamento de infraestrutura",
      "Organização técnica",
      "Validação controlada",
    ],
    statusNote: "Em desenvolvimento, usado como ambiente local de estudos e validação.",
  },
  "void-sudoku": {
    title: "Void Sudoku",
    description:
      "Jogo web interativo com interface moderna e foco em experiência fluida.",
    context:
      "O projeto foi pensado como exercício prático de front-end e lógica de aplicação, com foco em clareza visual e boa experiência de uso.",
    problem:
      "A entrega precisava ser simples de entender, responsiva e agradável de usar em diferentes tamanhos de tela.",
    solution:
      "Foi construída uma experiência limpa, com base pronta para receber recursos como níveis de dificuldade, histórico de partidas e microinterações.",
    commercialValue:
      "Para portfólio, esse case mostra domínio de interface, raciocínio lógico e atenção à experiência do usuário.",
    technicalHighlights: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide",
    ],
    demonstrates: [
      "Interface responsiva",
      "Lógica de interação",
      "Produto web enxuto",
      "Boas práticas de componentização",
    ],
    statusNote: "Em andamento, com vitrine pública na Vercel.",
  },
};

function buildFallbackCase(project: PortfolioProject): ProjectCaseContent {
  const statusNote =
    project.status === "em andamento"
      ? "Em andamento."
      : project.deployVercel
        ? "Projeto pronto e publicado na Vercel."
        : "Projeto pronto, sem demo pública confirmada.";

  return {
    title: project.name,
    description: project.summary,
    context: project.summary,
    problem:
      "Este case mostra como o projeto foi estruturado para comunicar valor de forma clara dentro do portfólio.",
    solution: project.summary,
    commercialValue:
      "O projeto demonstra capacidade de organizar informação, apresentar uma entrega com clareza e manter a comunicação visual profissional.",
    technicalHighlights: project.technologies.slice(0, 5),
    demonstrates: [
      "Organização de conteúdo",
      "Comunicação visual",
      "Uso de tecnologias modernas",
      "Apresentação profissional",
    ],
    statusNote,
  };
}

export function getProjectCase(project: PortfolioProject): ProjectCaseContent {
  return projectCases[project.slug] ?? buildFallbackCase(project);
}
