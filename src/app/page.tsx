import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { Portrait } from "@/components/portrait";
import { PracticeCard } from "@/components/practice-card";
import { Reveal } from "@/components/reveal";
import { articles } from "@/lib/articles";
import { practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

const facts = [
  { value: "Samsun", label: "Merkezli büro" },
  { value: String(practiceAreas.length).padStart(2, "0"), label: "Çalışma alanı" },
  { value: "Bireysel", label: "& kurumsal müvekkil" },
  { value: "Türkiye", label: "Geneli dava takibi" },
];

const approach = [
  {
    title: "Dinleme",
    text: "Sürecin başında olayı tüm yönleriyle dinler, beklentilerinizi ve önceliklerinizi netleştiririz.",
  },
  {
    title: "Analiz",
    text: "Belgeleri, mevzuatı ve güncel yargı kararlarını inceleyerek hukuki durumunuzu objektif biçimde değerlendiririz.",
  },
  {
    title: "Strateji",
    text: "Dava, arabuluculuk veya uzlaşma seçeneklerini artı ve eksileriyle paylaşarak yol haritasını birlikte belirleriz.",
  },
  {
    title: "Takip",
    text: "Dosyanızdaki her gelişmeyi düzenli ve anlaşılır biçimde raporlayarak süreci şeffaf şekilde yürütürüz.",
  },
];

export default function Home() {
  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="grain on-dark relative flex min-h-dvh flex-col overflow-hidden bg-navy-950 text-ivory-50">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute -right-48 top-1/4 size-[42rem] rounded-full bg-brass-500/[0.13] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-navy-700/60 blur-[120px]"
        />

        {/* Rotating seal */}
        <div
          aria-hidden="true"
          className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative grid size-[30rem] place-items-center xl:size-[34rem]">
            <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-[spin_60s_linear_infinite]">
              <defs>
                <path id="seal" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
              </defs>
              <text className="fill-brass-400/70 font-sans text-[8.5px] font-bold uppercase tracking-[0.42em]">
                <textPath href="#seal" textLength="505" lengthAdjust="spacing">Büşra Çelebi · Hukuk Bürosu · Samsun · Avukatlık ·</textPath>
              </text>
            </svg>
            <div className="absolute inset-[16%] rounded-full border border-ivory-50/10" />
            <div className="absolute inset-[24%] rounded-full border border-brass-500/25" />
            <span className="font-serif text-[13rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(203_168_116/0.55)] xl:text-[15rem]">
              §
            </span>
          </div>
        </div>

        <div className="container-x relative flex flex-1 flex-col justify-center pb-16 pt-36">
          <p className="eyebrow animate-fade-up">{site.lawyer} · {site.bar}</p>
          <h1 className="display mt-8 max-w-[14ch] animate-fade-up text-[3.4rem] [animation-delay:120ms] sm:text-7xl md:text-8xl xl:text-[8.5rem]">
            Hukukta <em className="font-normal text-brass-400">özen,</em> savunmada kararlılık.
          </h1>
          <p className="mt-10 max-w-xl animate-fade-up text-lg leading-8 text-navy-300 [animation-delay:240ms]">
            Bireysel ve kurumsal müvekkillerimize; dava takibinden önleyici danışmanlığa uzanan
            süreçlerde şeffaf, ulaşılabilir ve titiz bir hukuki hizmet sunuyoruz.
          </p>
          <div className="mt-12 flex animate-fade-up flex-col gap-4 [animation-delay:360ms] sm:flex-row">
            <Link href="/iletisim" className="btn btn-brass">
              Ön Görüşme Talep Edin <Icon name="arrow" className="size-4" />
            </Link>
            <Link href="/calisma-alanlari" className="btn btn-outline-light">
              Çalışma Alanlarımız
            </Link>
          </div>
        </div>

        {/* Fact strip */}
        <div className="relative border-t border-ivory-50/10">
          <dl className="container-x grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                style={{ animationDelay: `${480 + i * 90}ms` }}
                className={`animate-fade-up py-7 md:py-9 ${i % 2 === 1 ? "pl-6 md:pl-0" : ""} ${
                  i > 0 ? "md:border-l md:border-ivory-50/10 md:pl-8" : ""
                }`}
              >
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl text-ivory-50 md:text-4xl">{f.value}</span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-navy-300">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────── MARQUEE ───────────────── */}
      <section aria-label="Çalışma alanları" className="overflow-hidden border-b border-navy-900/10 bg-ivory-50 py-8">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
              {practiceAreas.map((a) => (
                <li key={a.slug} className="flex items-center">
                  <span className="whitespace-nowrap px-8 font-serif text-4xl italic text-navy-900 md:text-5xl">
                    {a.title}
                  </span>
                  <span className="text-xl text-brass-500">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ───────────────── ABOUT ───────────────── */}
      <section className="bg-ivory-100 py-24 md:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Portrait />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">Büromuz</p>
              <h2 className="display mt-6 text-5xl md:text-6xl">
                Her dosyaya, <em className="text-brass-700">tek dosya</em> özeniyle yaklaşıyoruz.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 space-y-6 text-[1.05rem] leading-8 text-navy-700">
                <p>
                  {site.name}, Samsun merkezli olarak bireysel ve kurumsal müvekkillerine geniş bir
                  yelpazede hukuki danışmanlık ve dava takibi hizmeti sunmaktadır.
                </p>
                <p>
                  Çalışma anlayışımızın merkezinde; müvekkille kurulan açık iletişim, mevzuat ve
                  içtihat takibine dayalı titiz hazırlık ve meslek etiğine bağlılık yer alır.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {["Gizlilik ve meslek etiği", "Şeffaf süreç yönetimi", "Ulaşılabilir iletişim", "Güncel içtihat takibi"].map(
                  (v) => (
                    <li key={v} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid size-7 place-items-center bg-brass-500 text-navy-950">
                        <Icon name="check" className="size-3.5" strokeWidth={2} />
                      </span>
                      {v}
                    </li>
                  ),
                )}
              </ul>
              <Link href="/hakkimizda" className="btn btn-navy mt-12">
                Hakkımızda <Icon name="arrow" className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────── PRACTICE AREAS ───────────────── */}
      <section className="bg-ivory-50 py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">Uzmanlık</p>
              <h2 className="display mt-6 max-w-2xl text-5xl md:text-7xl">Çalışma Alanlarımız</h2>
            </Reveal>
            <Reveal delay={120} className="max-w-md">
              <p className="leading-8 text-navy-500">
                Farklı hukuk disiplinlerinde edindiğimiz deneyimi, her müvekkilin ihtiyacına özel
                stratejilere dönüştürüyoruz.
              </p>
            </Reveal>
          </div>
          <div className="grid border-l border-t border-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 4) * 90}>
                <PracticeCard area={area} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── QUOTE ───────────────── */}
      <section className="grain on-dark relative overflow-hidden bg-navy-900 py-28 text-ivory-50 md:py-40">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div className="container-x relative text-center">
          <Reveal>
            <span aria-hidden="true" className="block font-serif text-[10rem] leading-[0.6] text-brass-500">
              “
            </span>
            <blockquote className="display mx-auto mt-6 max-w-5xl text-5xl md:text-7xl lg:text-8xl">
              Adalet <em className="text-brass-400">mülkün</em> temelidir.
            </blockquote>
            <div className="mx-auto mt-12 h-px w-24 origin-center bg-brass-500" />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── APPROACH ───────────────── */}
      <section className="bg-ivory-100 py-24 md:py-36">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Yaklaşımımız</p>
            <h2 className="display mt-6 text-5xl md:text-7xl">
              Dört adımda <em className="text-brass-700">net</em> bir yol haritası.
            </h2>
          </Reveal>
          <ol className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {approach.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 110} className="group relative">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl italic text-brass-500">{`0${i + 1}`}</span>
                  <span className="h-px flex-1 bg-navy-900/15 transition-colors duration-500 group-hover:bg-brass-500" />
                </div>
                <h3 className="mt-6 font-serif text-3xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-500">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── INSIGHTS ───────────────── */}
      <section className="border-t border-navy-900/10 bg-ivory-50 py-24 md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">Bilgi Merkezi</p>
              <h2 className="display mt-6 text-5xl md:text-7xl">Güncel Makaleler</h2>
            </Reveal>
            <Reveal delay={120}>
              <Link href="/makaleler" className="btn btn-navy">
                Tüm Makaleler <Icon name="arrow" className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 110}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
