import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Resumo profissional sobre o foco de desenvolvimento, web design, IA local e infraestrutura de estudos.",
};

const focusCards = [
  {
    title: "Desenvolvimento web",
    text: "Criação de sites, páginas institucionais e projetos web com foco em clareza e responsividade.",
  },
  {
    title: "Design de interface",
    text: "Construção de layouts limpos, tipografia forte e apresentação pensada para confiança.",
  },
  {
    title: "Automações e IA",
    text: "Exploração de assistentes, fluxos inteligentes e ferramentas que apoiam operações reais.",
  },
  {
    title: "Infraestrutura local",
    text: "Atenção a Linux, redes, SSH, acesso remoto e ambientes próprios de estudo e teste.",
  },
];

export default function SobrePage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <SectionHeading
            eyebrow="Sobre"
            title="Desenvolvedor e web designer em evolução"
            description="Foco em criar soluções digitais práticas, sites responsivos, automações, projetos com IA e infraestrutura local de estudos."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusCards.map((card) => (
              <div key={card.title} className={`${softCard} p-5`}>
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${sectionGlass} p-6 sm:p-8`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Meu foco de trabalho
              </h2>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                Eu gosto de transformar ideia em entrega visível. Isso significa
                organizar o conteúdo, construir uma interface limpa e garantir que a
                base técnica seja suficiente para manter o projeto evoluindo.
              </p>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                O resultado desejado é sempre o mesmo: uma solução simples de usar,
                com aparência profissional e espaço para crescer com segurança.
              </p>
            </div>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Posicionamento
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Portfólio focado em clientes e recrutadores que valorizam clareza,
                funcionalidade e uma apresentação técnica consistente.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

