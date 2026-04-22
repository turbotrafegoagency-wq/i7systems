import { Zap, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "@/lib/constants";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-xl font-black">
              <Zap className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-gradient-primary">i7 Systems</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Assistência técnica especializada em smartphones, tablets e eletrônicos.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">Links rápidos</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">Siga-nos</p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-all hover:border-primary hover:text-primary hover:glow"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-all hover:border-primary hover:text-primary hover:glow"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2025 i7 Systems — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
