import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardDriveDownload, Network, ServerCog, ShieldCheck } from "lucide-react";
import { ContactBanner } from "@/components/contact-banner";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";
import { primaryButton, sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Infraestrutura e Servidores",
  description:
    "Ambiente local de estudos e desenvolvimento com Linux, redes, SSH, automações e experimentos com IA.",
};

const serverProject = projects.find((project) => project.slug === "servidor-local-homelab");

const focusItems = [
  {
    title: "Linux e terminal",
    text: "Aprendizado prático com instalação, organização do sistema e rotina de administração.",
    icon: HardDriveDownload,
  },
  {
    title: "Redes e SSH",
    text: "Conceitos de rede, acesso remoto e estruturação de um ambiente estável para estudos.",
    icon: Network,
  },
  {
    title: "Hospedagem local",
    text: "Execução de testes, serviços locais e validação de aplicações antes de uma publicação.",
    icon: ServerCog,
  },
  {
    title: "Segurança operacional",
    text: "Separação de serviços, organização de acesso e práticas básicas de proteção do ambiente.",
    icon: ShieldCheck,
  },
];

export default function InfraestruturaPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="rounded-sm border border-line bg-orange/10 px-4 py-2 text-xs font-semibold text-orange">
                  Infraestrutura e Servidores
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl text-bone font-display sm:text-5xl">
                Base local para estudos, testes e automações.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Ambiente local de estudos e desenvolvimento utilizado para Linux,
                redes, SSH, acesso remoto, automações, hospedagem local, organização
                de projetos e experimentos com IA.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projetos" className={primaryButton}>
                  Ver projetos relacionados
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className={`${softCard} space-y-4 p-5`}>
              <div className="flex items-center gap-3">
                <ServerCog className="h-5 w-5 text-orange" />
                <p className="text-sm font-semibold text-bone">
                  Homelab
                </p>
              </div>
              <p className="text-sm leading-6 text-muted">
                Essa frente sustenta a parte experimental do portfólio, tanto para
                aprendizado quanto para testes de ferramentas e serviços internos.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Projeto principal"
            title="Servidor Local / Homelab"
            description="Ambiente local de estudos e desenvolvimento utilizado para Linux, redes, SSH, acesso remoto, automações, hospedagem local, organização de projetos e experimentos com IA."
          />

          {serverProject ? <ProjectCard project={serverProject} /> : null}
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Foco técnico"
            title="O que esse ambiente me permitiu aprender"
            description="O homelab não existe só como infraestrutura. Ele virou parte da minha prática diária e alimentou a evolução dos projetos maiores."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={`${softCard} p-5`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-line bg-panel-2 text-orange">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-semibold text-bone">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <ContactBanner />
      </Container>
    </div>
  );
}
