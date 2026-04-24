import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_URL, ADDRESS, PHONE_DISPLAY } from "@/lib/constants";
import logo from "@/assets/logo.png";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#antes-depois", label: "Antes e depois" },
  { href: "#nossa-loja", label: "Nossa loja" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Endereço" },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-12 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2.5 font-display text-xl font-black uppercase"
            >
              <img
                src={logo}
                alt="i7 Systems"
                className="h-11 w-11 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.2_235/0.7)]"
              />
              <span className="text-gradient-primary">i7 Systems</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Assistência técnica especializada em smartphones, tablets,
              notebooks e eletrônicos. Tecnologia, garantia e confiança em cada
              reparo.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {ADDRESS}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
              Links rápidos
            </p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-widest text-primary">
              Fale conosco
            </p>
            <p className="text-sm text-foreground">{PHONE_DISPLAY}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:glow"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-xs font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/20 pt-6 text-center text-xs text-muted-foreground">
          © 2025 i7 Systems — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
