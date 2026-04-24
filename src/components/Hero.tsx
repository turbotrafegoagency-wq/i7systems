import { ArrowRight, ShieldCheck, Star, Zap } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo.jpeg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden matte-bg pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 right-1/2 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:right-1/4 sm:translate-x-0 sm:h-[500px] sm:w-[500px] sm:bg-primary/20" />
      <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-primary-deep/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Logo first on mobile, text on desktop */}
          <div
            className="relative order-1 mx-auto w-full max-w-[180px] animate-fade-in-up sm:max-w-xs lg:order-2 lg:max-w-md"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary opacity-40 blur-3xl" />
            <img
              src={logo}
              alt="i7 Systems - Assistência Técnica de smartphones, tablets e notebooks"
              width={771}
              height={874}
              className="relative w-full animate-float rounded-3xl drop-shadow-[0_0_40px_oklch(0.7_0.2_235/0.6)]"
            />
          </div>

          <div className="order-2 text-center animate-fade-in-up lg:order-1 lg:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs">
              <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor" />
              Assistência Técnica nº1 da região
            </div>
            <h1 className="font-display text-2xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Assistência Técnica de Smartphones, Tablets e Notebooks{" "}
              <span className="text-gradient-primary neon-text">
                com garantia de 90 dias
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:text-base lg:mx-0 lg:text-lg">
              Conserto de celular, troca de tela e manutenção de smartphone com
              agilidade, preço justo e atendimento honesto. A i7 Systems resolve!
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-xs font-black uppercase tracking-wider text-primary-foreground glow-strong transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:text-sm"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary/40 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10 sm:w-auto sm:px-7 sm:text-sm"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:text-sm lg:justify-start lg:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                Garantia 90 dias
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="h-4 w-4 text-primary sm:h-5 sm:w-5" fill="currentColor" />
                Reparo no mesmo dia
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Star className="h-4 w-4 text-primary sm:h-5 sm:w-5" fill="currentColor" />
                5★ no Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
