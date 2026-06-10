# Auravie Portfolio

Portfólio profissional para reunir sites, landing pages, projetos web, automações, experimentos com IA e infraestrutura local de estudos.

## Links oficiais

- Site: https://auravie-portfolio.vercel.app
- GitHub: https://github.com/Bruno-Gadelha25/auravie-portfolio

## Projetos incluídos

- Auravie Portfolio
- ConstruFort Materiais
- Dashboard Netflix - Storytelling de Dados
- Corte Nobre Barbearia
- Padaria Jocker
- Void Store
- Void Sudoku
- Jullinha.ai
- Servidor Local / Homelab

## Links confirmados

- Auravie Portfolio
  - GitHub: https://github.com/Bruno-Gadelha25/auravie-portfolio
  - Demo: https://auravie-portfolio.vercel.app
- ConstruFort Materiais
  - GitHub: https://github.com/Bruno-Gadelha25/construfort-portfolio
  - Demo: https://construfort-portfolio.vercel.app
- Dashboard Netflix - Storytelling de Dados
  - GitHub: https://github.com/Bruno-Gadelha25/dashboard-netflix-storytelling
  - Demo: https://dashboard-netflix-python.vercel.app
- Corte Nobre Barbearia
  - GitHub: https://github.com/Bruno-Gadelha25/Barbearia-Nobre-
  - Demo: https://barbearia-nobre-ten.vercel.app/
- Padaria Jocker
  - GitHub: https://github.com/Bruno-Gadelha25/Padaria-Jocker
  - Demo: https://padaria-jocker.vercel.app

## Contato

- E-mail: brunogadelha2005@gmail.com
- WhatsApp: https://wa.me/5561984208604?text=Ol%C3%A1%2C%20Bruno%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.
- GitHub: https://github.com/Bruno-Gadelha25

## Stack

- Next.js 16 com App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

## Verificações recomendadas

```bash
npm run lint
npm run build
```

## Como adicionar novos projetos

1. Abra `src/lib/projects.ts`.
2. Adicione um novo objeto no array `projects`.
3. Preencha `name`, `category`, `type`, `technologies`, `status`, `portfolioPotential`, `summary`, `improvements`, `publishGithub`, `deployVercel`, `risks`, `githubUrl`, `demoUrl` e `detailsPath`.
4. Se o projeto merecer destaque, inclua o `slug` em `featuredProjectSlugs`.
5. Rode `npm run lint` e `npm run build`.

## Como editar contatos

1. Abra `src/lib/site.ts`.
2. Atualize `contactEmail`.
3. Atualize `whatsappUrl` se o número ou a mensagem mudarem.
4. Se quiser apontar o botão de GitHub para outro perfil, ajuste `githubProfileUrl`.

## Observações

- O site foi pensado para apresentar trabalhos reais com leitura profissional.
- Projetos em desenvolvimento permanecem marcados como `em andamento`.
- Não há dados sensíveis versionados no repositório.
