import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const items = [
  {
    num: "01",
    text: "Facilitamos o pagamento com condições flexíveis, garantindo uma experiência prática, leve e sem complicações do início ao fim.",
  },
  {
    num: "02",
    text: "Suporte pós-atendimento contínuo para suas necessidades, contando com garantia em todos os serviços de até 3 meses.",
  },
  {
    num: "03",
    text: "Realizamos nossos serviços no menor tempo possível, sem abrir mão da qualidade e da solução completa para a necessidade de cada cliente.",
  },
  {
    num: "04",
    text: "Somos a melhor avaliada no Google na nossa região, experiência 5 estrelas do começo ao fim.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            4 &nbsp; Motivos
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Para você
            <br />
            <span className="text-gradient-primary neon-text">nos escolher</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ num, text }) => (
            <div
              key={num}
              className="card-spotlight group relative flex flex-col items-center rounded-2xl border border-primary/30 bg-card/60 p-8 text-center transition-all hover:border-primary hover:-translate-y-2 hover:glow"
            >
              <div className="font-display text-6xl font-black text-primary neon-text sm:text-7xl">
                {num}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={WHATSAPP_LINK("Olá! Quero mais informações sobre os serviços da i7 Systems.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
          >
            Quero esses benefícios
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
