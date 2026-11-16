/**
 * Site-wide configuration.
 * Fields marked TODO were not verifiable from public sources — confirm with the client.
 */
export const site = {
  name: "Büşra Çelebi Hukuk Bürosu",
  shortName: "Büşra Çelebi",
  lawyer: "Av. Büşra Çelebi",
  url: "https://www.busracelebi.av.tr", // TODO: confirm production domain
  description:
    "Samsun merkezli Büşra Çelebi Hukuk Bürosu; ceza, aile, iş, ticaret, gayrimenkul ve miras hukukunda bireysel ve kurumsal müvekkillerine danışmanlık ve dava takibi hizmeti sunar.",
  phone: "0362 233 70 20",
  phoneHref: "tel:+903622337020",
  email: "info@busracelebi.av.tr", // TODO: confirm
  address: {
    line1: "Adres bilgisi eklenecek", // TODO: office street address
    city: "Samsun",
    country: "Türkiye",
  },
  hours: "Pazartesi – Cuma · 09:00 – 18:00", // TODO: confirm
  bar: "Samsun Barosu",
  social: {
    instagram: "https://www.instagram.com/busracelebihukukburosu/",
  },
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/calisma-alanlari", label: "Çalışma Alanları" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/iletisim", label: "İletişim" },
] as const;
