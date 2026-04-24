import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import iphoneImg from "@/assets/before-after-iphone.png";
import huaweiImg from "@/assets/before-after-huawei.png";
import notebookImg from "@/assets/before-after-notebook.png";

const repairs = [
  {
    value: "iphone",
    label: "iPhone",
    title: "Troca de tela com acabamento preciso",
    img: iphoneImg,
    alt: "Antes e depois de reparo em iPhone com tela quebrada",
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
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card/60 glow">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 text-center">
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