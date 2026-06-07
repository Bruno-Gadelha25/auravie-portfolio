import Link from "next/link";
import { ArrowUpRight, GitBranch, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { site, siteCategories } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                AV
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{site.name}</p>
                <p className="text-sm text-slate-400">
                  Sites, projetos web, IA e infraestrutura local
                </p>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Portfólio criado para apresentar trabalhos reais com foco em
              clareza, performance e apresentação profissional.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
              Navegação
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-400">
              <li><Link href="/projetos">Projetos</Link></li>
              <li><Link href="/jornada">Jornada</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
              Categorias
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-400">
              {siteCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={category.route}>{category.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {year} {" "}
            {site.shortName}. Construído com Next.js, TypeScript e Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <Link href="/contato" className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail className="h-4 w-4" />
              E-mail
            </Link>
            <Link href="/contato" className="inline-flex items-center gap-2 transition hover:text-white">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
            <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
              Voltar ao topo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
