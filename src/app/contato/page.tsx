import type { Metadata } from "next";
import Link from "next/link";
import { GitBranch, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { isCleanVersion } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { primaryButton, secondaryButton } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contato",
  description: isCleanVersion
    ? "Versão do portfólio sem canais externos."
    : "Fale com o Bruno Gadelha sobre vagas na área de dados, sites para negócios e projetos com IA local.",
};

export default function ContatoPage() {
  if (isCleanVersion) {
    return (
      <Container className="py-20">
        <h1 className="font-display text-6xl text-bone">Contato</h1>
        <p className="mt-4 max-w-xl text-muted">
          Os canais externos ficam ocultos nesta versão. Navegue pelos projetos e pela jornada.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projetos" className={primaryButton}>Ver projetos</Link>
          <Link href="/jornada" className={secondaryButton}>Jornada</Link>
        </div>
      </Container>
    );
  }

  const whatsappDisplay = "+55 61 98420-8604";

  return (
    <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p className="flex items-center gap-3 text-sm font-semibold text-muted">
          <span className="h-[3px] w-10 bg-red" />
          Contato
        </p>
        <h1 className="font-display mt-4 text-6xl text-bone sm:text-7xl">Bora conversar?</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
          Procuro minha primeira vaga na área de dados e também faço sites para pequenos
          negócios. Escreva aqui: a mensagem já chega pronta no WhatsApp ou no e-mail.
        </p>

        <dl className="mt-10 grid gap-px overflow-hidden border border-line bg-line">
          <div className="bg-panel/90 p-5">
            <dt className="text-sm text-muted">WhatsApp</dt>
            <dd className="mt-1">
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold text-bone hover:text-red">
                <MessageCircle className="h-5 w-5 text-cyan" />
                {whatsappDisplay}
              </a>
            </dd>
          </div>
          <div className="bg-panel/90 p-5">
            <dt className="text-sm text-muted">E-mail</dt>
            <dd className="mt-1 select-all text-lg font-semibold text-bone">{site.contactEmail}</dd>
          </div>
          <div className="bg-panel/90 p-5">
            <dt className="text-sm text-muted">GitHub</dt>
            <dd className="mt-1">
              <a href={site.githubProfileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-lg font-semibold text-bone hover:text-red">
                <GitBranch className="h-5 w-5 text-cyan" />
                Bruno-Gadelha25
              </a>
            </dd>
          </div>
          {site.linkedinUrl ? (
            <div className="bg-panel/90 p-5">
              <dt className="text-sm text-muted">LinkedIn</dt>
              <dd className="mt-1">
                <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="text-lg font-semibold text-bone hover:text-red">
                  Ver perfil
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>

      <div className="border border-line bg-panel/85 p-6 sm:p-8">
        <h2 className="font-display text-4xl text-bone">Mande uma mensagem</h2>
        <p className="mb-6 mt-2 text-sm text-muted">Nada fica salvo no site: o texto vai direto para o app que você escolher.</p>
        <ContactForm />
      </div>
    </Container>
  );
}
