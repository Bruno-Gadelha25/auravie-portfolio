"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { isCleanVersion } from "@/lib/portfolio";
import { mainNav, site } from "@/lib/site";
import { navLinkClass } from "@/lib/ui";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, início`}>
          <span className="font-display flex h-10 w-10 items-center justify-center bg-red text-xl text-white">
            BG
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-xl text-bone">{site.name}</span>
            <span className="text-xs text-muted">{site.role}</span>
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="-mr-4 flex min-w-0 items-center gap-4 overflow-x-auto pr-4 sm:mr-0 sm:gap-6 sm:pr-0"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkClass(
                !item.href.includes("#") && pathname.startsWith(item.href),
              )} shrink-0 whitespace-nowrap`}
            >
              {item.label}
            </Link>
          ))}
          {!isCleanVersion ? (
            <a
              href={site.githubProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 border border-line px-3 py-1.5 text-sm font-semibold text-bone transition hover:border-bone/50 md:inline-flex"
            >
              GitHub
            </a>
          ) : null}
        </nav>
      </Container>
    </header>
  );
}
