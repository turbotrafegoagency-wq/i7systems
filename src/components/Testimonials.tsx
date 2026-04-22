import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "João S.", text: "Atendimento rápido, honesto e preço justo. Super recomendo!" },
  { name: "Maria L.", text: "Trocaram a tela do meu celular em menos de 1 hora. Excelente!" },
  { name: "Carlos R.", text: "Transparência total do início ao fim. Voltarei sempre!" },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Depoimentos</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
            O que nossos <span className="text-gradient-primary">clientes dizem</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl border border-border bg-gradient-card p-7 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/20" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-base text-foreground">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
