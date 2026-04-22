import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import aboutImg from "@/assets/about-workshop.jpg";

const points = [
  "Equipe altamente especializada",
  "Equipamentos modernos e diagnóstico preciso",
  "Atendimento transparente do início ao fim",
  "Investimento contínuo em tecnologia",
];

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={aboutImg}
              alt="Oficina i7 Systems com tecnologia de ponta"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-3xl border border-primary/20 shadow-card"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Sobre nós</p>
            <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
              Entregamos mais que soluções —{" "}
              <span className="text-gradient-primary">entregamos tranquilidade.</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              A i7 Systems nasceu para tornar a tecnologia mais simples e acessível. Nossa equipe especializada
              utiliza equipamentos modernos e oferece atendimento transparente, com responsabilidade em cada
              detalhe. Investimos constantemente em evolução para superar as suas expectativas.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK("Olá! Gostaria de falar com um especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-4 text-base font-bold text-primary-foreground glow transition-transform hover:scale-105"
            >
              Falar com um especialista
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
