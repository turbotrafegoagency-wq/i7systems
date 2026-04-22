import { ArrowRight, ShieldCheck, Star, Zap } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-device.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary-deep/30 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <Star className="h-3.5 w-3.5" fill="currentColor" />
              Assistência Técnica nº1 da região
            </div>
            <h1 className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Seu equipamento te deixou na mão?{" "}
              <span className="text-gradient-primary neon-text">
                A i7 Systems resolve!
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Tecnologia e cuidado caminham juntos para garantir resultados
              consistentes e a confiança que você espera. Conserto de celulares,
              tablets e eletrônicos com agilidade e garantia.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground glow-strong transition-transform hover:scale-105"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/40 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Garantia 90 dias
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" fill="currentColor" />
                Reparo no mesmo dia
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" fill="currentColor" />
                5★ no Google
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary opacity-30 blur-3xl" />
            <img
              src={heroImg}
              alt="Smartphone, tablet e celular sendo reparados pela i7 Systems"
              width={1024}
              height={1024}
              className="relative w-full rounded-3xl border border-primary/30 shadow-card animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
