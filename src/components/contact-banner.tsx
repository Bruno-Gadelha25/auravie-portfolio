import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { isCleanVersion } from "@/lib/portfolio";
import { site } from "@/lib/site";
import { primaryButton, secondaryButton } from "@/lib/ui";

type ContactBannerProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function ContactBanner({
  title = "Gostou de algum projeto? Bora conversar.",
  description = "Vaga na área de dados, site para o seu negócio ou dúvida sobre um projeto: a mensagem chega direto no WhatsApp ou no e-mail.",
  compact = false,
}: ContactBannerProps) {
  return (
    <section className="relative border border-line bg-panel/85 p-6 sm:p-8">
      <span className="absolute inset-y-0 left-0 w-1 bg-red" aria-hidden />
      <div className={`grid gap-6 ${compact ? "" : "lg:grid-cols-[1.2fr_0.8fr] lg:items-center"}`}>
        <div className="space-y-3">
          <h2 className="font-display max-w-3xl text-4xl text-bone sm:text-5xl">{title}</h2>
          <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {isCleanVersion ? (
            <Link href="/projetos" className={primaryButton}>
              Ver projetos
            </Link>
          ) : (
            <>
              <Link href="/contato" className={primaryButton}>
                Enviar mensagem
              </Link>
              {site.whatsappUrl ? (
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className={secondaryButton}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              ) : null}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
