import Link from "next/link";
import { ArrowUpRight, GitBranch, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { ghostButton, primaryButton, secondaryButton, sectionGlass } from "@/lib/ui";

type ContactBannerProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function ContactBanner({
  title = "Gostou de algum projeto? Vamos conversar.",
  description = "Se você quer um site, landing page, automação ou projeto com IA, posso ajudar a transformar a ideia em uma entrega objetiva.",
  compact = false,
}: ContactBannerProps) {
  const emailHref = site.contactEmail
    ? `mailto:${site.contactEmail}?subject=${encodeURIComponent("Orçamento via Auravie Portfolio")}`
    : null;

  return (
    <section className={`${sectionGlass} p-6 sm:p-8`}>
      <div
        className={`grid gap-6 ${compact ? "" : "lg:grid-cols-[1.15fr_0.85fr] lg:items-center"}`}
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Contato
          </p>
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          {site.whatsappUrl ? (
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className={primaryButton}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          ) : null}
          {emailHref ? (
            <a href={emailHref} className={secondaryButton}>
              <Mail className="h-4 w-4" />
              E-mail
            </a>
          ) : null}
          <a href={site.githubProfileUrl} target="_blank" rel="noreferrer" className={ghostButton}>
            <GitBranch className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link href="/projetos" className={ghostButton}>
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
