export const WHATSAPP_NUMBER = "251904222223";
export const PHONE_DISPLAY = "+251 90 422 2223";
export const PHONE_TEL = "+251904222223";
export const TIKTOK_HANDLE = "@yehin.shado.hotel";
export const TIKTOK_URL = "https://www.tiktok.com/@yehin.shado.hotel";
export const ADDRESS_EN =
  "Jemo 1, next to Saba Building (3rd Floor), Addis Ababa, Ethiopia";
export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Jemo+1+Saba+Building+Addis+Ababa+Ethiopia&output=embed";

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
