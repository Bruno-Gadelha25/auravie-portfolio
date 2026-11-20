import Link from "next/link";
import { Container } from "@/components/container";
import { isCleanVersion } from "@/lib/portfolio";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Projetos", href: "/projetos" },
    { label: "Jornada", href: "/jornada" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <footer className="relative z-10 border-t border-line bg-ink">
      <Container className="py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[clamp(2.75rem,8vw,5.5rem)] text-bone">{site.tagline}</p>
            <p className="mt-3 text-sm text-muted">
              {site.name}, {site.role.toLowerCase()}. Brasília, DF.
            </p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted hover:text-bone">
                {link.label}
              </Link>
            ))}
            {!isCleanVersion ? (
              <>
                <a href={site.githubProfileUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-bone">
                  GitHub
                </a>
                {site.linkedinUrl ? (
                  <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-bone">
                    LinkedIn
                  </a>
                ) : null}
              </>
            ) : null}
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
          <p>{year}. Feito com Next.js, TypeScript e Tailwind CSS.</p>
          <a href="#top" className="hover:text-bone">Voltar ao topo</a>
        </div>
      </Container>
    </footer>
  );
}
