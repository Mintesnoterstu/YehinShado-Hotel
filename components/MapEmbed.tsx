import { MAP_EMBED_SRC } from "@/lib/whatsapp";

export function MapEmbed({ title }: { title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gold/20">
      <iframe
        title={title}
        src={MAP_EMBED_SRC}
        className="h-[360px] w-full border-0 md:h-[440px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
