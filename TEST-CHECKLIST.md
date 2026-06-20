# Test Checklist

## Executado

- [x] `npm install`
- [x] `npm run lint`
- [x] `npm run build`
- [x] Validação de rotas estáticas e dinâmicas geradas pelo build

## Conferências manuais recomendadas

- [ ] Abrir a home e validar hero, estatísticas e projetos em destaque
- [ ] Testar busca na página de projetos
- [ ] Testar filtro por categoria na página de projetos
- [ ] Validar as páginas:
  - [ ] `/projetos`
  - [ ] `/sites-e-landing-pages`
  - [ ] `/projetos-web`
  - [ ] `/experimentos-com-ia`
  - [ ] `/infraestrutura-e-servidores`
  - [ ] `/jornada`
  - [ ] `/sobre`
  - [ ] `/contato`
- [ ] Verificar botões GitHub, Demo e Contato
- [ ] Validar a versão `full` com `NEXT_PUBLIC_PORTFOLIO_VARIANT=full`
- [ ] Validar a versão `clean` com `NEXT_PUBLIC_PORTFOLIO_VARIANT=clean`
- [ ] Conferir que a versão `clean` não exibe WhatsApp, e-mail, GitHub, código ou repositório
- [ ] Conferir responsividade em desktop, tablet e celular
- [ ] Revisar metadata, Open Graph e favicon

## Deploy

- [ ] Publicar na Vercel
- [ ] Validar URL final de produção
