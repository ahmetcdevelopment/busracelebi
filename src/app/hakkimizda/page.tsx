import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} ve ${site.lawyer} hakkında bilgi; çalışma ilkelerimiz ve değerlerimiz.`,
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    title: "Gizlilik",
    text: "Müvekkillerimizle paylaşılan her bilgi, avukatlık meslek sırrı kapsamında titizlikle korunur.",
  },
  {
    title: "Şeffaflık",
    text: "Sürecin olası sonuçlarını, sürelerini ve maliyetlerini başından itibaren açık bir dille paylaşırız.",
  },
  {
    title: "Özen",
    text: "Her dosyayı mevzuat, öğreti ve güncel yargı kararları ışığında kapsamlı biçimde hazırlarız.",
  },
  {
    title: "Ulaşılabilirlik",
    text: "Dosyanızın durumu hakkında düzenli bilgilendirme yapar, sorularınıza zamanında yanıt veririz.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            Güvenle başlayan, <em className="text-brass-400">özenle</em> süren bir hukuki ilişki.
          </>
        }
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Hakkımızda" }]}
      />

      {/* Story */}
      <section className="bg-ivory-100 py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Büromuz</p>
            <p className="display mt-6 text-4xl text-navy-900 md:text-5xl">
              “Hukuki destek, sorun doğmadan önce başlar.”
            </p>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-[1.05rem] leading-8 text-navy-700 lg:col-span-7 lg:col-start-6">
            <p>
              {site.name}, Samsun merkezli olarak kurulmuş; bireysel ve kurumsal müvekkillerine
              ceza, aile, iş, ticaret, gayrimenkul, miras ve icra hukuku başta olmak üzere geniş bir
              alanda danışmanlık ve dava takibi hizmeti sunmaktadır.
            </p>
            <p>
              Büromuz, hukuki uyuşmazlıkların yalnızca mahkeme salonunda değil, sözleşme masasında
              ve doğru zamanda verilen bir danışmanlıkla da çözülebileceğine inanır. Bu nedenle
              önleyici hukuk hizmetini, dava takibi kadar önemli görürüz.
            </p>
            <p>
              Türkiye genelindeki dosyalarda, yargı ağı (UYAP) üzerinden ve gerektiğinde yerinde
              takip ile müvekkillerimize kesintisiz hizmet sağlıyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lawyer profile */}
      <section className="bg-ivory-50 py-24 md:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <Portrait caption={false} />
            <div className="grain relative mx-auto -mt-16 w-[92%] max-w-[460px] overflow-hidden bg-navy-900 p-8 text-ivory-50 shadow-[0_30px_60px_-30px_rgb(10_20_34/0.6)] md:p-10 lg:ml-10">
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brass-500/20 blur-[90px]" />
              <dl className="relative grid gap-8 sm:grid-cols-2">
                {[
                  ["Unvan", "Avukat, Kurucu"],
                  ["Kayıtlı Baro", site.bar],
                  ["Eğitim", "Hukuk Fakültesi"], // TODO: university
                  ["Diller", "Türkçe, İngilizce"], // TODO: confirm
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-ivory-50/15 pt-5">
                    <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-brass-400">{k}</dt>
                    <dd className="mt-2 font-serif text-2xl">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow">Kurucu Avukat</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">{site.lawyer}</h2>
            <p className="mt-8 text-[1.05rem] leading-8 text-navy-700">
              {/* TODO: replace with the lawyer's own biography */}
              Av. Büşra Çelebi, {site.bar}&apos;na kayıtlı olarak serbest avukatlık yapmaktadır.
              Mesleki faaliyetlerini müvekkil odaklı, şeffaf ve ilkeli bir çalışma anlayışıyla
              sürdürmekte; dava takibinin yanı sıra önleyici hukuki danışmanlık hizmeti sunmaktadır.
            </p>
            <Link href="/iletisim" className="btn btn-navy mt-10">
              İletişime Geçin <Icon name="arrow" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-100 py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">İlkelerimiz</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">Değerlerimiz</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="group bg-ivory-100 p-8 transition-colors duration-500 hover:bg-ivory-50 md:p-10">
                <span className="font-serif text-5xl italic text-brass-500">{`0${i + 1}`}</span>
                <h3 className="mt-8 font-serif text-3xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-500">{v.text}</p>
                <span className="mt-8 block h-px w-10 bg-brass-500 transition-all duration-700 ease-out-expo group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
