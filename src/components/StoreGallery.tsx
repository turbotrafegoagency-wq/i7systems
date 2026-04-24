import { MapPin } from "lucide-react";
import { ADDRESS } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accessoriesWall from "@/assets/store-accessories-wall.jpeg";
import storeRoom from "@/assets/store-front-room.jpeg";
import casesWall from "@/assets/store-cases-wall.jpeg";

const storePhotos = [
  {
    value: "acessorios",
    label: "Acessórios",
    title: "Películas, cabos, carregadores e acessórios",
    img: accessoriesWall,
    alt: "Parede de acessórios, películas e cabos da loja i7 Systems",
  },
  {
    value: "loja",
    label: "Ambiente",
    title: "Loja física com atendimento técnico especializado",
    img: storeRoom,
    alt: "Ambiente interno da loja i7 Systems em Barueri",
  },
  {
    value: "capas",
    label: "Capas",
    title: "Capas e acessórios para diversos modelos",
    img: casesWall,
    alt: "Exposição de capas e acessórios para smartphones",
  },
];

export function StoreGallery() {
  return (
    <section id="nossa-loja" className="relative py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Nossa loja
          </p>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Estrutura completa para assistência técnica e acessórios
          </h2>
          <p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-sm text-muted-foreground sm:text-base">
            <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
            {ADDRESS}
          </p>
        </div>

        <Tabs defaultValue="acessorios" className="mt-10">
          <TabsList className="grid h-auto w-full grid-cols-3 rounded-full border border-primary/30 bg-card/70 p-1">
            {storePhotos.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="rounded-full px-2 py-3 text-xs font-black uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {storePhotos.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-6">
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card/60 glow">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="font-display text-xl font-black uppercase text-gradient-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}