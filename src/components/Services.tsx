import { WHATSAPP_LINK } from "@/lib/constants";
import smartphonesImg from "@/assets/service-smartphones.jpg";
import tabletsImg from "@/assets/service-tablets.jpg";
import notebooksImg from "@/assets/service-notebooks.jpg";
import accessoriesImg from "@/assets/service-accessories.jpg";

const services = [
  {
    img: smartphonesImg,
    title: "Smartphones",
    desc: "Seu smartphone merece cuidado e precisão para voltar a funcionar com desempenho, estabilidade e a mais impecável aparência.",
  },
  {
    img: tabletsImg,
    title: "Tablets",
    desc: "Seu tablet recebe atenção completa para recuperar a fluidez no uso diário, e garantir uma experiência tranquila do começo ao fim.",
  },
  {
    img: notebooksImg,
    title: "Notebooks",
    desc: "Manutenção, formatação, upgrade e reparo de hardware com técnicos especializados e peças de qualidade comprovada.",
  },
  {
    img: accessoriesImg,
    title: "Acessórios",
    desc: "Venda de acessórios, capas, películas, carregadores e peças originais com garantia para o seu equipamento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Técnicos Especializados
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Tudo o que seu equipamento{" "}
            <span className="text-gradient-primary neon-text">
              precisa, em um só lugar.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ img, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-primary/30 bg-card/60 p-5 transition-all hover:border-primary hover:-translate-y-2 hover:glow"
            >
              <div className="overflow-hidden rounded-xl bg-primary">
                <img
                  src={img}
                  alt={title}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-5 text-center font-display text-xl font-black text-gradient-primary">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-center text-sm text-muted-foreground">
                {desc}
              </p>
              <a
                href={WHATSAPP_LINK(`Olá! Quero um orçamento para ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-full bg-gradient-primary px-5 py-3 text-center text-xs font-black uppercase tracking-wider text-primary-foreground glow transition-transform hover:scale-105"
              >
                Clique aqui
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
