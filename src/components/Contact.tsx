import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { WHATSAPP_LINK, PHONE_DISPLAY, INSTAGRAM_URL, ADDRESS, HOURS } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contato" className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Contato</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
            Encontre a <span className="text-gradient-primary">i7 Systems</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">Endereço</p>
                <p className="mt-1 text-foreground">{ADDRESS}</p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 transition-all hover:border-primary/60 hover:glow"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">WhatsApp</p>
                <p className="mt-1 text-foreground">{PHONE_DISPLAY}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">Horário</p>
                <p className="mt-1 text-foreground">{HOURS}</p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 transition-all hover:border-primary/60 hover:glow"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground glow">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">Instagram</p>
                <p className="mt-1 text-foreground">@i7systems</p>
              </div>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border glow">
            <iframe
              title="Localização i7 Systems"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.847373!2d-46.6555!3d-23.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjAiUyA0NsKwMzknMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
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
