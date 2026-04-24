import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
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

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-primary/20 backdrop-blur-xl bg-background/85">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-base font-black uppercase sm:text-xl"
        >
          <img
            src={logo}
            alt="i7 Systems"
            className="h-10 w-10 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.2_235/0.7)] sm:h-11 sm:w-11"
          />
          <span className="text-gradient-primary">i7 Systems</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-2.5 text-xs font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
        >
          Pedir Orçamento
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-semibold text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-base font-black uppercase tracking-wider text-primary-foreground glow"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
