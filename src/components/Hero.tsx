import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-device.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Star className="h-3.5 w-3.5" fill="currentColor" />
              Assistência Técnica nº1 da região
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Seu dispositivo parou?{" "}
              <span className="text-gradient-primary">A i7 Systems resolve!</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Tecnologia e cuidado unidos para garantir resultados reais e a confiança que você merece.
              Conserto de celulares, tablets e eletrônicos com agilidade e garantia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-4 text-base font-bold text-primary-foreground glow-strong transition-transform hover:scale-105"
              >
                SOLICITAR ORÇAMENTO AGORA
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Garantia de 90 dias
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-primary opacity-30 blur-3xl" />
            <img
              src={heroImg}
              alt="Smartphone sendo reparado pela i7 Systems com tecnologia avançada"
              width={1024}
              height={1024}
              className="relative w-full rounded-3xl border border-primary/20 shadow-card animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
