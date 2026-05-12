import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import iphoneAntes1 from "@/assets/iphone-antes-1.jpg";
import iphoneDepois1 from "@/assets/iphone-depois-1.jpg";
import iphoneAntes2 from "@/assets/iphone-antes-2.jpg";
import iphoneDepois2 from "@/assets/iphone-depois-2.jpg";
import huaweiImg from "@/assets/before-after-huawei.png";
import notebookImg from "@/assets/before-after-notebook.png";

type Pair = { before: string; after: string; alt: string };

type Repair = {
  value: string;
  label: string;
  title: string;
  pairs?: Pair[];
  img?: string;
  alt?: string;
};

const repairs: Repair[] = [
  {
    value: "iphone",
    label: "iPhone",
    title: "Troca de tela e tampa traseira com acabamento original",
    pairs: [
      { before: iphoneAntes1, after: iphoneDepois1, alt: "Troca de tampa traseira de iPhone" },
      { before: iphoneAntes2, after: iphoneDepois2, alt: "Troca de tela de iPhone" },
    ],
  },
  {
    value: "huawei",
    label: "Huawei",
    title: "Display restaurado com qualidade e garantia",
    img: huaweiImg,
    alt: "Antes e depois de troca de tela em smartphone Huawei",
  },
  {
    value: "notebook",
    label: "Notebook",
    title: "Manutenção técnica para notebooks e eletrônicos",
    img: notebookImg,
    alt: "Antes e depois de manutenção em notebook na assistência técnica",
  },
];

function PairCard({ pair }: { pair: Pair }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {(["before", "after"] as const).map((key) => (
        <div key={key} className="relative overflow-hidden rounded-xl border border-primary/30 bg-black/40">
          <span className="absolute left-2 top-2 z-10 rounded-full bg-background/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary backdrop-blur">
            {key === "before" ? "Antes" : "Depois"}
          </span>
          <img
            src={pair[key]}
            alt={`${key === "before" ? "Antes" : "Depois"} — ${pair.alt}`}
            loading="lazy"
            className="aspect-[3/4] w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="antes-depois" className="relative py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Antes e depois
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Resultado real em conserto de celular, tela e notebook
          </h2>
        </div>

        <Tabs defaultValue="iphone" className="mt-10">
          <TabsList className="grid h-auto w-full grid-cols-3 rounded-full border border-primary/30 bg-card/70 p-1">
            {repairs.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="rounded-full px-2 py-3 text-xs font-black uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {repairs.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-6">
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-4 sm:p-6 glow">
                {item.pairs ? (
                  <div className="space-y-4 sm:space-y-6">
                    {item.pairs.map((p, i) => (
                      <PairCard key={i} pair={p} />
                    ))}
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt={item.alt}
                    width={900}
                    height={700}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                )}
                <div className="p-2 pt-5 text-center sm:p-4 sm:pt-6">
                  <h3 className="font-display text-xl font-black uppercase text-gradient-primary">
                    {item.title}
                  </h3>
                  <a
                    href={WHATSAPP_LINK(`Olá! Quero um orçamento para ${item.label}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-xs font-black uppercase tracking-wider text-primary-foreground glow sm:w-auto"
                  >
                    Fazer orçamento
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
