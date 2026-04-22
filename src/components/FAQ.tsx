import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Quais equipamentos vocês atendem?", a: "Smartphones (iPhone e Android), tablets multimarcas, computadores, notebooks e demais eletrônicos." },
  { q: "A avaliação tem custo?", a: "Não. A avaliação técnica e o orçamento são totalmente gratuitos e sem compromisso." },
  { q: "Qual a garantia dos serviços?", a: "Oferecemos 90 dias de garantia em todos os serviços e peças instaladas." },
  { q: "Preciso agendar antes de ir?", a: "Não é obrigatório, mas recomendamos para um atendimento mais rápido. Entre em contato pelo WhatsApp." },
  { q: "O serviço só é feito após minha aprovação?", a: "Sim. Realizamos o orçamento e somente prosseguimos após sua aprovação." },
  { q: "Qual o prazo para conclusão do serviço?", a: "A maioria dos reparos é concluída no mesmo dia. Casos mais complexos podem levar até 72 horas." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border bg-gradient-card transition-all ${
                  isOpen ? "border-primary/60 glow" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base font-bold text-foreground sm:text-lg">{f.q}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground sm:text-base animate-fade-in-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
