import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const faqs = [
  {
    q: "Quais equipamentos vocês atendem?",
    a: "Atendemos smartphones (iPhone e Android), tablets multimarcas, computadores, notebooks e demais eletrônicos.",
  },
  {
    q: "A avaliação tem custo?",
    a: "Não. A avaliação técnica e o orçamento são totalmente gratuitos e sem compromisso.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, oferecemos até 90 dias de garantia em todos os serviços e peças instaladas.",
  },
  {
    q: "Preciso agendar antes?",
    a: "Não é obrigatório, mas recomendamos para um atendimento mais rápido. Entre em contato pelo WhatsApp.",
  },
  {
    q: "O serviço só é feito após aprovação?",
    a: "Sim. Realizamos o orçamento e somente prosseguimos após sua aprovação.",
  },
  {
    q: "Qual o prazo para o serviço ficar pronto?",
    a: "A maioria dos reparos é concluída no mesmo dia. Casos mais complexos podem levar até 72 horas.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            F &nbsp; A &nbsp; Q
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Tudo o que
            <br />
            <span className="text-gradient-primary neon-text">
              você precisa saber
            </span>
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-lg bg-card border-b-2 border-primary/60 transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-3 p-5 text-left"
                >
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-display text-base font-bold text-foreground sm:text-lg">
                    {f.q}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-12 text-sm text-muted-foreground sm:text-base animate-fade-in-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-base font-bold text-foreground">
          Transparência, agilidade e garantia para cuidar
          <br />
          do seu equipamento com segurança.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_LINK("Olá! Tenho uma dúvida e gostaria de falar com vocês.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-primary px-8 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
          >
            Ainda tem dúvidas? Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}
