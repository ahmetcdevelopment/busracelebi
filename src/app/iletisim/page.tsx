import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} iletişim bilgileri ve randevu talep formu.`,
  alternates: { canonical: "/iletisim" },
};

const channels: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: "mail", label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  { icon: "pin", label: "Adres", value: `${site.address.line1}, ${site.address.city}` },
  { icon: "clock", label: "Çalışma Saatleri", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Bir <em className="text-brass-400">görüşme</em> ile başlayalım.
          </>
        }
        lead="Randevu talebinizi form aracılığıyla iletebilir veya doğrudan telefonla ulaşabilirsiniz. Tüm görüşmeler gizlilik içinde yürütülür."
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "İletişim" }]}
      />

      <section className="bg-ivory-100 py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ul className="space-y-px bg-navy-900/10">
              {channels.map((c, i) => {
                const inner = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center border border-navy-900/15 text-brass-600 transition-colors duration-500 group-hover:border-brass-500 group-hover:bg-brass-500 group-hover:text-navy-950">
                      <Icon name={c.icon} className="size-5" />
                    </span>
                    <span>
                      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy-500">
                        {c.label}
                      </span>
                      <span className="mt-1 block font-serif text-2xl text-navy-900">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal as="li" key={c.label} delay={i * 80} className="bg-ivory-100">
                    {c.href ? (
                      <a href={c.href} className="group flex items-center gap-5 py-6">
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-5 py-6">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy mt-10 w-full"
            >
              <Icon name="instagram" className="size-4" /> Instagram&apos;da Takip Edin
            </a>
          </div>

          <Reveal delay={120} className="relative bg-ivory-50 p-8 shadow-[0_40px_80px_-40px_rgb(15_28_46/0.25)] md:p-14 lg:col-span-7 lg:col-start-6">
            <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-24 bg-brass-500" />
            <p className="eyebrow">Randevu Formu</p>
            <h2 className="display mb-10 mt-5 text-4xl md:text-5xl">Size nasıl yardımcı olabiliriz?</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
