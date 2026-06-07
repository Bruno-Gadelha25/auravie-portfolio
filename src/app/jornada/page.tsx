import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { sectionGlass, softCard } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Jornada",
  description:
    "A trajetória técnica do servidor local ao ecossistema Jullinha e ao portfólio profissional.",
};

const timeline = [
  "Ideia inicial do servidor",
  "Montagem do ambiente local",
  "Instalação do Ubuntu Server",
  "Aprendizado com redes e SSH",
  "Testes com IA local",
  "Criação da Jullinha.ai",
  "Organização do portfólio freelancer",
];

const journeyParagraphs = [
  "Minha jornada começou com uma ideia simples: reaproveitar alguns HDs antigos e montar um pequeno servidor local.",
  "O que parecia ser apenas um teste virou um projeto real de aprendizado. A partir de hardware reaproveitado, comecei a montar um ambiente próprio para estudar Linux, redes, SSH, armazenamento, acesso remoto, automações e aplicações com IA.",
  "No início, muita coisa foi feita na tentativa e erro. Instalei Ubuntu Server sem interface gráfica, aprendi a lidar com terminal, configurações de rede, IP, DHCP, acesso remoto e organização de arquivos. Cada erro virou uma etapa de aprendizado, e cada problema resolvido deixou o projeto mais sólido.",
  "Com o tempo, o servidor deixou de ser apenas uma máquina reaproveitada e se tornou um homelab: um ambiente local de testes, estudos e desenvolvimento. Nele, comecei a experimentar ferramentas, modelos locais de IA, organização de conhecimento no Obsidian e ideias de automação.",
  "Dessa base nasceu a Jullinha.ai, um projeto de assistente inteligente em desenvolvimento, pensado para organizar informações, gerar relatórios, apoiar automações e futuramente auxiliar operações digitais de pequenos negócios.",
  "Essa jornada representa meu jeito de aprender: colocando a mão na massa, errando, corrigindo, testando e transformando recursos simples em projetos funcionais.",
];

export default function JornadaPage() {
  return (
    <div className="py-6 sm:py-10">
      <Container className="space-y-10">
        <section className={`${sectionGlass} p-6 sm:p-8 lg:p-10`}>
          <SectionHeading
            eyebrow="Jornada"
            title="Uma trajetória construída com prática, revisão e continuidade"
            description="Do homelab aos projetos de IA, a linha evolutiva foi se consolidando como base de aprendizado e portfólio."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-4">
              {journeyParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-slate-300 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={`${softCard} p-5`}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/75">
                Evolução
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A jornada mostra a passagem de um estudo pontual para uma estrutura
                mais ampla, capaz de conectar servidor, automações, IA local e
                organização de conhecimento.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Timeline"
            title="Etapas principais da minha evolução"
            description="A sequência abaixo resume os marcos que ajudaram a construir a base técnica atual."
          />

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/40 via-white/10 to-transparent lg:block" />
            <div className="grid gap-4">
              {timeline.map((item, index) => (
                <div
                  key={item}
                  className={`${softCard} relative flex gap-4 p-5 lg:pl-6`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{item}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Marco consolidado na construção do portfólio e da base técnica.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

