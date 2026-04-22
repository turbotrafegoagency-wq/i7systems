import { Smartphone, Tablet, Laptop, Cable, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  { icon: Smartphone, title: "Smartphones", desc: "iPhones e Android — troca de tela, bateria, placa, conector e muito mais." },
  { icon: Tablet, title: "Tablets", desc: "Conserto de tablets multimarcas com peças de qualidade e garantia." },
  { icon: Laptop, title: "Computadores e Notebooks", desc: "Manutenção, formatação, upgrade e reparo de hardware." },
  { icon: Cable, title: "Acessórios e Peças", desc: "Venda de peças originais, capas, películas e acessórios." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Nossos serviços</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
            Tudo o que seu equipamento precisa,{" "}
            <span className="text-gradient-primary">em um só lugar.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/60 hover:glow"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
              <a
                href={WHATSAPP_LINK(`Olá! Quero um orçamento para ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-glow"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
