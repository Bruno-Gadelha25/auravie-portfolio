import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { isCleanVersion } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { ghostButton, primaryButton, sectionGlass, secondaryButton, softCard } from "@/lib/ui";

const pageDescription = isCleanVersion
  ? "Versão limpa do portfólio, sem canais externos e com navegação interna para projetos, jornada e sobre."
  : "Entre em contato com Bruno para orçamentos, sites, landing pages, projetos web, automações e soluções com IA.";

export const metadata: Metadata = {
  title: "Contato",
  description: pageDescription,
};

export default function ContatoPage() {
  const emailHref =
    !isCleanVersion && site.contactEmail
      ? `mailto:${site.contactEmail}?subject=${encodeURIComponent("Orçamento via Auravie Portfolio")}`
      : null;

  if (isCleanVersion) {
    return (
      <div className="py-6 sm:py-10">
        <Container className="space-y-10">
          <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10 animate-fade-up`}>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <SectionHeading
                  eyebrow="Versão limpa"
                  title="Mesmo portfólio, sem canais externos"
                  description="Esta variante mantém os projetos, as imagens, as descrições e o layout, mas oculta os canais externos."
                />

                <div className="flex flex-wrap gap-3">
                  <Link href="/projetos" className={primaryButton}>
                    Ver projetos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/sobre" className={secondaryButton}>
                    Sobre
                  </Link>
                  <Link href="/jornada" className={ghostButton}>
                    Jornada
                  </Link>
                </div>
              </div>

              <div className={`${softCard} p-5`}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                  Acesso interno
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Use as páginas internas para navegar pelos cases e pela
                  trajetória do portfólio.
                </p>
                <div className="mt-5 grid gap-3">
                  <Link
                    href="/projetos"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.08]"
                  >
                    Projetos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/sobre"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.08]"
                  >
                    Sobre
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/jornada"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.08]"
                  >
                    Jornada
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            <div className={`${softCard} p-5`}>
              <ArrowUpRight className="h-5 w-5 text-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">Projetos</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                A lista completa continua disponível com os mesmos cards,
                imagens e descrições.
              </p>
            </div>

            <div className={`${softCard} p-5`}>
              <Sparkles className="h-5 w-5 text-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">Visual</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Layout, animações e responsividade continuam iguais à versão
                completa.
              </p>
            </div>

            <div className={`${softCard} p-5`}>
              <ArrowRight className="h-5 w-5 text-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">Uso</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Esta variante é indicada para propostas, marketplaces e páginas
                de apresentação.
              </p>
            </div>
          </section>

          <section className={`${sectionGlass} p-6 sm:p-8`}>
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  Sem links externos
                </h2>
                <p className="max-w-3xl text-sm leading-6 text-slate-300">
                  Nesta versão, os canais externos ficam ocultos para manter a
                  vitrine limpa.
                </p>
              </div>
            </div>
          </section>

          <div className="flex justify-start">
            <Link href="/projetos" className={ghostButton}>
              Ver projetos
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10 animate-fade-up`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Contato"
                title="Vamos conversar sobre seu projeto"
                description="Se você quer um site, uma landing page, um projeto web ou uma solução com IA, este é o ponto de entrada para orçamento e alinhamento."
              />

              <div className="flex flex-wrap gap-3">
                {site.whatsappUrl ? (
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButton}
                  >
                    WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                {emailHref ? (
                  <a href={emailHref} className={secondaryButton}>
                    E-mail
                  </a>
                ) : null}
                <a
                  href={site.githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={ghostButton}
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Resposta direta
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                O contato está ativo por WhatsApp e e-mail. Se você já tiver
                briefing, objetivo e prazo, envie esses dados na primeira
                mensagem.
              </p>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    WhatsApp
                  </p>
                  <a
                    href={site.whatsappUrl ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-100"
                  >
                    <MessageCircle className="h-4 w-4 text-cyan-200" />
                    +55 61 98420-8604
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    E-mail
                  </p>
                  {emailHref ? (
                    <a
                      href={emailHref}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-100"
                    >
                      <Mail className="h-4 w-4 text-cyan-200" />
                      {site.contactEmail}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className={`${softCard} p-5`}>
            <MessageCircle className="h-5 w-5 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">WhatsApp</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Canal mais rápido para alinhar escopo, prazo e necessidade do
              projeto.
            </p>
            {site.whatsappUrl ? (
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-cyan-50"
              >
                Abrir conversa
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>

          <div className={`${softCard} p-5`}>
            <Mail className="h-5 w-5 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">E-mail</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Bom para enviar briefing, arquivos de referência e detalhes do
              orçamento.
            </p>
            {emailHref ? (
              <a
                href={emailHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-cyan-50"
              >
                Enviar e-mail
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>

          <div className={`${softCard} p-5`}>
            <GitBranch className="h-5 w-5 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Útil para revisar repositórios, referências técnicas e estrutura
              dos projetos.
            </p>
            <a
              href={site.githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition hover:text-cyan-50"
            >
              Abrir GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">
                CTA para orçamento
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-slate-300">
                Gostou de algum projeto? Vamos conversar. Se você já tem uma ideia
                ou precisa de ajuda para definir o escopo, posso ajudar a
                transformar o briefing em uma proposta clara.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-start">
          <Link href="/projetos" className={ghostButton}>
            Ver projetos
          </Link>
        </div>
      </Container>
    </div>
  );
}
