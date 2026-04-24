import { MapPin, Phone, Clock, Instagram, ArrowRight } from "lucide-react";
import {
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  INSTAGRAM_URL,
  ADDRESS,
  HOURS,
} from "@/lib/constants";

export function Contact() {
  return (
    <section id="contato" className="relative py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            Localização
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Encontre a i7 Systems
            <br />
            <span className="text-gradient-primary neon-text">
              perto de você
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Estamos prontos para receber você com atendimento transparente,
            estrutura completa e a confiança que seu dispositivo merece.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-card/60 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Endereço
                </p>
                <p className="mt-1 text-foreground">{ADDRESS}</p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-card/60 p-5 transition-all hover:border-primary hover:glow"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  WhatsApp
                </p>
                <p className="mt-1 text-foreground">{PHONE_DISPLAY}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-card/60 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Horário
                </p>
                <p className="mt-1 text-foreground">{HOURS}</p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-card/60 p-5 transition-all hover:border-primary hover:glow"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Instagram
                </p>
                <p className="mt-1 text-foreground">@i7systems</p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground glow-strong transition-transform hover:scale-105"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary/30 glow">
            <iframe
              title="Localização i7 Systems"
              src="https://www.google.com/maps?q=Rua%20Santa%20Cruz%20do%20Arari%20764%20Jd.%20Calif%C3%B3rnia%20Barueri%20SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px", filter: "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
