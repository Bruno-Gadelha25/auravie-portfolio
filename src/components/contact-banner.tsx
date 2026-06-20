import Link from "next/link";
import { ArrowUpRight, GitBranch, Mail, MessageCircle } from "lucide-react";
import { isCleanVersion } from "@/lib/portfolio";
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
  const actions = isCleanVersion
    ? [
        {
          type: "link" as const,
          href: "/projetos",
          label: "Ver projetos",
          className: primaryButton,
        },
        {
          type: "link" as const,
          href: "/sobre",
          label: "Sobre",
          className: secondaryButton,
        },
        {
          type: "link" as const,
          href: "/jornada",
          label: "Jornada",
          className: ghostButton,
        },
      ]
    : [
        {
          type: "anchor" as const,
          href: site.whatsappUrl ?? "#",
          label: "WhatsApp",
          className: primaryButton,
          icon: MessageCircle,
        },
        {
          type: "anchor" as const,
          href: emailHref ?? "#",
          label: "E-mail",
          className: secondaryButton,
          icon: Mail,
        },
        {
          type: "anchor" as const,
          href: site.githubProfileUrl,
          label: "GitHub",
          className: ghostButton,
          icon: GitBranch,
        },
        {
          type: "link" as const,
          href: "/projetos",
          label: "Ver projetos",
          className: ghostButton,
        },
      ];

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
          {actions.map((action) =>
            action.type === "link" ? (
              <Link key={action.label} href={action.href} className={action.className}>
                {action.label}
              </Link>
            ) : (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className={action.className}
              >
                <action.icon className="h-4 w-4" />
                {action.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
