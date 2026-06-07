import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";
import { primaryButton, sectionGlass, softCard, disabledButton, ghostButton } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Canais de contato e orçamento para projetos de sites, projetos web, IA e infraestrutura.",
};

export default function ContatoPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Contato"
                title="Vamos conversar sobre seu projeto"
                description="Se você quer um site, uma landing page, um projeto web ou uma solução com IA, este é o ponto de entrada."
              />

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.githubProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={primaryButton}
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/projetos" className={ghostButton}>
                  Ver projetos
                </Link>
              </div>
            </div>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Canal atual
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Hoje o contato público está concentrado no GitHub. Os canais diretos
                de e-mail e WhatsApp podem ser ativados depois com os dados oficiais.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className={`${softCard} p-5`}>
            <GitBranch className="h-5 w-5 text-cyan-200" />
            <h3 className="mt-4 text-lg font-semibold text-white">GitHub</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Canal público para iniciar conversa, revisar repositórios e combinar
              detalhes do projeto.
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

          <div className={`${softCard} p-5`}>
            <Mail className="h-5 w-5 text-slate-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">E-mail</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Canal em definição. Quando o endereço oficial for informado, ele pode
              entrar aqui sem alterar a estrutura do site.
            </p>
            <button type="button" className={`mt-5 ${disabledButton}`} disabled>
              E-mail indisponível no momento
            </button>
          </div>

          <div className={`${softCard} p-5`}>
            <MessageCircle className="h-5 w-5 text-slate-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">WhatsApp</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Canal em definição. A página já está pronta para receber o link
              oficial quando ele estiver disponível.
            </p>
            <button type="button" className={`mt-5 ${disabledButton}`} disabled>
              WhatsApp indisponível no momento
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}
