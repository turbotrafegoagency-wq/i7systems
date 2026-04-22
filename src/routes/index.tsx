import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "i7 Systems | Assistência Técnica de Smartphones e Tablets" },
      {
        name: "description",
        content:
          "Conserto de celulares, tablets e eletrônicos com garantia de 90 dias. Atendimento rápido, honesto e preço justo. Fale agora pelo WhatsApp!",
      },
      {
        name: "keywords",
        content:
          "assistência técnica, conserto de celular, troca de tela, manutenção de smartphone, conserto de tablet, i7 systems",
      },
      { property: "og:title", content: "i7 Systems | Assistência Técnica de Smartphones e Tablets" },
      {
        property: "og:description",
        content:
          "Conserto de celulares, tablets e eletrônicos com garantia de 90 dias. Atendimento rápido e honesto.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
