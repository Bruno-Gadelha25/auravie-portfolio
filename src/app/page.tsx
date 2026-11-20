import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import {
  aiTimeline,
  clientSiteSlugs,
  gpuBenchmark,
  homelabStack,
  personaColor,
  webAppSlugs,
} from "@/lib/home-content";
import { isCleanVersion } from "@/lib/portfolio";
import { getProjectScreenshots } from "@/lib/project-media";
import { projectsBySlug, type PortfolioProject } from "@/lib/projects";
import { site } from "@/lib/site";
import { ghostButton, primaryButton, secondaryButton } from "@/lib/ui";

const terminalLines = [
  { prompt: "bruno@b2026:~$", cmd: "docker compose up -d" },
  { prompt: "bruno@b2026:~$", cmd: "psql -d projetos" },
  { prompt: "bruno@b2026:~$", cmd: "ollama run qwen3" },
];

function SectionTitle({
  kicker,
  title,
  children,
  color = "var(--red)",
}: {
  kicker: string;
  title: string;
  children?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 text-sm font-semibold text-muted">
        <span className="h-[3px] w-10" style={{ background: color }} />
        {kicker}
      </p>
      <h2 className="font-display mt-4 text-5xl text-bone sm:text-6xl lg:text-7xl">{title}</h2>
      {children ? <div className="mt-5 text-lg leading-8 text-muted">{children}</div> : null}
    </div>
  );
}

function ExternalLinks({ project }: { project: PortfolioProject }) {
  if (isCleanVersion) return null;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-bone hover:text-red">
          Abrir site <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-bone hover:text-red">
          <GitBranch className="h-4 w-4" /> Código
        </a>
      ) : null}
    </div>
  );
}

export default function Home() {
  const julinha = projectsBySlug["jullinha-ai"];
  const gpuLab = projectsBySlug["nexo-dual-gpu-lab"];
  const dataProjects = ["clinica-veterinaria-db", "api-simples", "dashboard-netflix"]
    .map((slug) => projectsBySlug[slug])
    .filter(Boolean);
  const clientSites = clientSiteSlugs.map((slug) => projectsBySlug[slug]).filter(Boolean);
  const webApps = webAppSlugs.map((slug) => projectsBySlug[slug]).filter(Boolean);
  const homelab = projectsBySlug["servidor-local-homelab"];
  const maxMs = Math.max(...gpuBenchmark.map((row) => row.ms));

  return (
    <div className="pb-10">
      {/* HERO */}
      <section className="relative border-b border-line">
        <Container className="grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:pb-20 lg:pt-24">
          <div className="min-w-0">
            <div className="font-mono space-y-1.5 text-[13px] sm:text-sm" aria-label="Terminal">
              {terminalLines.map((line, index) => (
                <p
                  key={line.cmd}
                  className="type-line overflow-hidden whitespace-nowrap"
                  style={{ animationDelay: `${index * 0.75}s` }}
                >
                  <span className="text-cyan">{line.prompt}</span>{" "}
                  <span className="text-bone/90">{line.cmd}</span>
                </p>
              ))}
              <p
                className="type-line caret overflow-hidden whitespace-nowrap text-pink"
                style={{ animationDelay: "2.25s" }}
              >
                &gt;&gt;&gt; Oi, Bruno. Julinha online. Nexo pronto.
              </p>
            </div>

            <h1 className="hero-rise mt-10" style={{ animationDelay: "0.1s" }}>
              <span className="font-display block text-[clamp(4.2rem,15vw,11.5rem)] text-bone">
                Bruno
                <br />
                Gadelha
              </span>
              <span className="font-display mt-4 inline-block bg-red px-3 pb-1 pt-2 text-[clamp(2rem,6vw,4.25rem)] text-white">
                DBA em formação
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-bone/80">
              Estudo Banco de Dados no Senac DF e coloco em prática em casa: servidor Linux,
              PostgreSQL e MySQL, e dois assistentes de IA rodando em duas placas de vídeo.
            </p>
            <p className="font-display mt-6 text-3xl text-orange sm:text-4xl">{site.tagline}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#julinha-nexo" className={primaryButton}>
                Ver a Julinha + Nexo
              </Link>
              <Link href="/projetos" className={secondaryButton}>
                Todos os projetos
              </Link>
              {!isCleanVersion ? (
                <a href={site.githubProfileUrl} target="_blank" rel="noreferrer" className={ghostButton}>
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
              ) : null}
            </div>
          </div>

          <figure className="hero-rise relative hidden lg:block" style={{ animationDelay: "0.35s" }}>
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-panel">
              <Image
                src="/projects/nexo/interface-hud.png"
                alt="Interface atual do Nexo rodando no PC do Bruno"
                fill
                priority
                sizes="420px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-5 pt-16">
                <p className="text-sm text-muted">Agora, no meu PC</p>
                <p className="font-display text-3xl text-cyan">Nexo online</p>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full border-2 border-red" aria-hidden />
          </figure>
        </Container>

        <div className="border-t border-line bg-panel/60">
          <Container className="flex flex-wrap gap-x-8 gap-y-2 py-4 text-sm font-semibold text-muted">
            {["SQL", "PostgreSQL", "MySQL", "Python", "Linux", "Docker", "Next.js", "IA local"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </Container>
        </div>
      </section>

      {/* JULINHA + NEXO */}
      <section id="julinha-nexo" className="scroll-mt-20 border-b border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionTitle kicker="Projeto principal" title="Julinha + Nexo" color="var(--pink)">
              Dois assistentes de IA que rodam no meu PC, sem nuvem. A Julinha nasceu como um
              teste de voz num notebook; o Nexo veio depois. Hoje eles conversam, lembram,
              falam e dividem o trabalho entre duas placas de vídeo.
            </SectionTitle>
            <div className="flex gap-6 text-sm font-semibold">
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-pink" /> Julinha</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-cyan" /> Nexo</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 bg-orange" /> Placas</span>
            </div>
          </div>

          {/* Antes e agora */}
          <div className="mt-14 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <figure className="relative overflow-hidden border border-line bg-panel">
              <div className="relative aspect-[16/10]">
                <Image src="/projects/nexo/orbe-v1.png" alt="Primeira interface do Nexo: um orbe azul com campo de conversa" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-4 py-3 text-sm">
                <span className="text-muted">Antes</span>
                <span className="font-semibold text-bone">Primeiro orbe do Nexo</span>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden border border-cyan/40 bg-panel">
              <div className="relative aspect-[16/10]">
                <Image src="/projects/nexo/interface-hud.png" alt="Interface atual: esfera de partículas e painel com processador, memória e as duas placas de vídeo" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between border-t border-cyan/30 px-4 py-3 text-sm">
                <span className="text-cyan">Agora</span>
                <span className="font-semibold text-bone">18 mil partículas e telemetria ao vivo</span>
              </figcaption>
            </figure>
          </div>

          {/* Linha do tempo */}
          <ol className="relative mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {aiTimeline.map((step) => (
              <li key={step.title} className="relative bg-ink p-6">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: personaColor[step.who] }} aria-hidden />
                <p className="font-mono text-xs" style={{ color: personaColor[step.who] }}>
                  {step.date}
                </p>
                <h3 className="font-display mt-3 text-3xl text-bone">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 border-l-4 border-orange pl-6 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className="font-display text-6xl text-bone">6,4 s</p>
              <p className="mt-2 text-sm text-muted">da sua fala até a resposta em voz (eram uns 73 s)</p>
            </div>
            <div>
              <p className="font-display text-6xl text-bone">2 GPUs</p>
              <p className="mt-2 text-sm text-muted">GTX 970 pensa, GTX 750 Ti cuida de voz e memória</p>
            </div>
            <div>
              <p className="font-display text-6xl text-bone">R$ 0</p>
              <p className="mt-2 text-sm text-muted">de nuvem para conversar no dia a dia: tudo local</p>
            </div>
          </div>

          {julinha ? (
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href={julinha.detailsPath} className={secondaryButton}>
                Detalhes técnicos
              </Link>
              <p className="text-sm text-muted">{julinha.technologies.join(", ")}</p>
            </div>
          ) : null}
        </Container>
      </section>

      {/* GPU LAB */}
      {gpuLab ? (
        <section className="border-b border-line py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionTitle kicker="Pesquisa de hardware" title="NEXO DUAL GPU LAB" color="var(--orange)">
                {gpuLab.summary}
              </SectionTitle>

              <div className="mt-10 space-y-5" role="img" aria-label="Tempo do mesmo cálculo: 57,9 ms só na GTX 750 Ti, 23,6 ms só na GTX 970 e 20,3 ms nas duas juntas. Menor é melhor.">
                {gpuBenchmark.map((row) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-baseline justify-between text-sm">
                      <span className="text-bone/85">{row.label}</span>
                      <span className="font-display text-2xl text-bone">{row.ms.toLocaleString("pt-BR")} ms</span>
                    </div>
                    <div className="h-4 bg-panel-2">
                      <div className="h-full" style={{ width: `${(row.ms / maxMs) * 100}%`, background: row.color }} />
                    </div>
                  </div>
                ))}
                <p className="text-sm text-muted">Mesmo cálculo de 8 milhões de elementos. Menor é melhor.</p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href={gpuLab.detailsPath} className={primaryButton}>
                  Ver o experimento
                </Link>
                <ExternalLinks project={gpuLab} />
              </div>
            </div>

            <figure className="border border-line bg-panel p-2">
              <Image
                src="/projects/nexo/gpu-control.png"
                alt="NEXO GPU Control com as duas placas perto de 100% de uso durante o cálculo"
                width={1156}
                height={839}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-muted">
                Painel que eu fiz para ver as duas placas trabalhando ao mesmo tempo.
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      {/* DADOS */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <SectionTitle kicker="O que eu estudo" title="Banco de dados">
            Modelagem, SQL e análise. O curso na teoria, estes projetos na prática.
          </SectionTitle>

          <div className="mt-12 overflow-hidden border border-line">
            {dataProjects.map((project, index) => (
              <article
                key={project.slug}
                className={`grid gap-4 bg-panel/70 p-6 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center sm:gap-8 ${index > 0 ? "border-t border-line" : ""}`}
              >
                <div>
                  <h3 className="font-display text-3xl text-bone">
                    <Link href={project.detailsPath} className="hover:text-red">{project.name}</Link>
                  </h3>
                  <p className="mt-2 font-mono text-xs text-cyan">{project.technologies.slice(0, 4).join("  /  ")}</p>
                </div>
                <p className="text-[15px] leading-7 text-muted">{project.summary}</p>
                <ExternalLinks project={project} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SITES */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle kicker="Sites Express" title="Sites para negócios" color="var(--cyan)">
              Sites rápidos, bonitos no celular e com contato direto pelo WhatsApp.
            </SectionTitle>
            <Link href="/sites-e-landing-pages" className={ghostButton}>
              Ver todos
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {clientSites.map((project, index) => {
              const shot = getProjectScreenshots(project.slug)?.desktop;
              const big = index === 0 || index === 1;
              return (
                <Link
                  key={project.slug}
                  href={project.detailsPath}
                  className={`group relative block overflow-hidden border border-line bg-panel ${big ? "col-span-2" : ""}`}
                >
                  <div className="relative aspect-[16/10]">
                    {shot ? (
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes={big ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                        className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-2.5">
                    <span className="truncate text-sm font-semibold text-bone">{project.name}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-red" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* WEB APPS + HOMELAB */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionTitle kicker="Aplicações" title="Projetos web" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {webApps.map((project) => {
                const shot = getProjectScreenshots(project.slug)?.desktop;
                return (
                  <article key={project.slug} className="border border-line bg-panel/70">
                    <Link href={project.detailsPath} className="relative block aspect-[16/10] overflow-hidden border-b border-line">
                      {shot ? (
                        <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover object-top" />
                      ) : null}
                    </Link>
                    <div className="space-y-3 p-5">
                      <h3 className="font-display text-2xl text-bone">{project.name}</h3>
                      <p className="text-sm leading-6 text-muted">{project.summary}</p>
                      <ExternalLinks project={project} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {homelab ? (
            <aside className="self-start border border-line bg-panel/80 p-6 lg:sticky lg:top-24">
              <p className="flex items-center gap-3 text-sm font-semibold text-muted">
                <span className="h-[3px] w-10 bg-cyan" />
                Onde tudo roda
              </p>
              <h2 className="font-display mt-4 text-5xl text-bone">Homelab</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted">{homelab.summary}</p>
              <ul className="font-mono mt-6 space-y-2 text-sm">
                {homelabStack.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-bone/90">
                    <span className="text-cyan">$</span> {item}
                  </li>
                ))}
              </ul>
              <Link href={homelab.detailsPath} className={`${ghostButton} mt-8`}>
                Como é montado
              </Link>
            </aside>
          ) : null}
        </Container>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionTitle kicker="Contato" title="Bora conversar?">
              Procuro minha primeira vaga na área de dados e também faço sites para pequenos
              negócios. Mande uma mensagem: ela já chega pronta no WhatsApp ou no e-mail.
            </SectionTitle>
            <p className="font-display mt-10 text-4xl text-orange">{site.tagline}</p>
          </div>
          <div className="border border-line bg-panel/85 p-6 sm:p-8">
            {isCleanVersion ? (
              <p className="text-muted">Os canais de contato estão ocultos nesta versão do portfólio.</p>
            ) : (
              <ContactForm />
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
