import { WHATSAPP_LINK } from "@/lib/constants";
import whatsappIcon from "@/assets/whatsapp-icon.png";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-[72px] w-[72px] items-center justify-center rounded-full animate-pulse-ring transition-transform hover:scale-110 sm:h-20 sm:w-20"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="h-full w-full object-contain"
      />
    </a>
  );
}
