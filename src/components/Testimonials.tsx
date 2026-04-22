import { Star, Quote } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const reviews = [
  {
    name: "Maria Aparecida da Silva",
    when: "1 mês atrás",
    text: "Preço justo e de confiança. Resolveram meu problema rapidamente.",
    color: "oklch(0.65 0.22 320)",
  },
  {
    name: "Rosa Maria",
    when: "2 meses atrás",
    text: "São educados, tiram dúvidas e fazem serviço de qualidade. Recomendo!",
    color: "oklch(0.65 0.22 25)",
  },
  {
    name: "Pedro Gabriel Almeida",
    when: "3 semanas atrás",
    text: "Recomendo, fiz troca de tela do meu iPhone e ficou perfeito.",
    color: "oklch(0.65 0.22 145)",
  },
  {
    name: "João Santos",
    when: "1 semana atrás",
    text: "Atendimento rápido, honesto e preço justo. Super recomendo!",
    color: "oklch(0.65 0.22 240)",
  },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto h-12 w-12 text-primary neon-text"
            fill="currentColor"
          />
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.4em] text-primary">
            Depoimentos
          </p>
          <h2 className="mt-4 font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Clientes satisfeitos,
            <br />
            <span className="text-gradient-primary neon-text">
              resultados reais
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white p-5 text-left shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      {r.name}
                    </p>
                    <p className="text-xs text-neutral-500">{r.when}</p>
                  </div>
                </div>
                <GoogleG />
              </div>
              <div className="mt-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm text-neutral-700">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_LINK("Olá! Vi os depoimentos e gostaria de um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-primary/40 px-8 py-4 text-sm font-black uppercase tracking-wider text-primary transition-all hover:border-primary hover:bg-primary/10"
          >
            Quero ser o próximo cliente satisfeito
          </a>
        </div>
      </div>
    </section>
  );
}
