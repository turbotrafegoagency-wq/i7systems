import { CreditCard, ShieldCheck, Zap, Star } from "lucide-react";

const items = [
  { num: "01", icon: CreditCard, title: "Pagamento facilitado", text: "Condições flexíveis e parcelamento que cabe no seu bolso." },
  { num: "02", icon: ShieldCheck, title: "Garantia de 90 dias", text: "Em todos os serviços realizados, sem letras miúdas." },
  { num: "03", icon: Zap, title: "Agilidade & qualidade", text: "Reparos rápidos sem abrir mão da excelência técnica." },
  { num: "04", icon: Star, title: "5 estrelas no Google", text: "A assistência técnica melhor avaliada da região." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Por que escolher</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
            Diferenciais que <span className="text-gradient-primary">fazem a diferença</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ num, icon: Icon, title, text }) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/50 hover:-translate-y-2 hover:glow"
            >
              <div className="absolute -right-4 -top-6 font-display text-7xl font-black text-primary/10 transition-colors group-hover:text-primary/30">
                {num}
              </div>
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary glow">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
