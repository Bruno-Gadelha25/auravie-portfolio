"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, BriefcaseBusiness, GitBranch } from "lucide-react";
import { Container } from "@/components/container";
import { mainNav, site } from "@/lib/site";
import { ghostButton, navLinkClass } from "@/lib/ui";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
                AV
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold tracking-[0.24em] text-white uppercase">
                  {site.shortName}
                </span>
                <span className="text-xs text-slate-400">
                  Portfólio profissional
                </span>
              </span>
            </Link>

            <Link href="/contato" className={`${ghostButton} lg:hidden`}>
              Contato
            </Link>
          </div>

          <nav className="flex flex-wrap gap-2">
            {mainNav.slice(0, 9).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(
                  pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href)),
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={site.githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className={ghostButton}
            >
              <GitBranch className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/contato" className={ghostButton}>
              <BriefcaseBusiness className="h-4 w-4" />
              Contato
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
