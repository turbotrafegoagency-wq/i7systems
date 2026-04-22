import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import aboutImg from "@/assets/about-workshop.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary opacity-25 blur-3xl" />
            <img
              src={aboutImg}
              alt="Técnico especializado da i7 Systems realizando reparo"
              width={1024}
              height={1024}
              loading="lazy"
              className="rounded-3xl border border-primary/30 shadow-card"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Quem &nbsp; Somos
            </p>
            <div className="border-l-4 border-primary pl-5">
              <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                Entregamos mais que soluções,{" "}
                <span className="text-gradient-primary neon-text">
                  entregamos tranquilidade!
                </span>
              </h2>
            </div>

            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              A i7 Systems foi criada para tornar a tecnologia mais simples,
              acessível e sem complicações para você. Nosso foco é oferecer
              atendimento próximo, soluções inteligentes e resultados
              consistentes que acompanham o ritmo do seu dia a dia. Cada cliente
              é atendido com clareza, responsabilidade e atenção real, porque
              acreditamos que confiança se constrói em cada detalhe.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Investimos em estrutura, equipe especializada e recursos
              tecnológicos modernos para garantir qualidade em cada etapa do
              serviço. Evoluímos constantemente para entregar não apenas
              soluções, mas uma experiência segura, transparente e acima das
              expectativas.
            </p>

            <a
              href={WHATSAPP_LINK("Olá! Gostaria de falar com um especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" fill="currentColor" />
              Falar com especialista!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
