import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getPracticeArea, practiceAreas } from "@/lib/practice-areas";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/calisma-alanlari/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/calisma-alanlari/${area.slug}` },
  };
}

export default async function PracticeAreaPage(props: PageProps<"/calisma-alanlari/[slug]">) {
  const { slug } = await props.params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        eyebrow="Çalışma Alanı"
        title={area.title}
        lead={area.summary}
        crumbs={[
          { href: "/", label: "Ana Sayfa" },
          { href: "/calisma-alanlari", label: "Çalışma Alanları" },
          { label: area.title },
        ]}
      />

      <section className="bg-ivory-100 py-24 md:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <Reveal className="prose-legal">
              {area.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg">
                  {p}
                </p>
              ))}
              <h2>Sunduğumuz hizmetler</h2>
            </Reveal>
            <ul className="mt-2 border-t border-navy-900/10">
              {area.services.map((s, i) => (
                <Reveal
                  as="li"
                  key={s}
                  delay={i * 70}
                  className="group flex items-center gap-6 border-b border-navy-900/10 py-6"
                >
                  <span className="font-serif text-xl italic text-brass-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 text-[1.05rem] text-navy-800 transition-transform duration-500 group-hover:translate-x-1">
                    {s}
                  </span>
                </Reveal>
              ))}
            </ul>
          </article>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="grain relative overflow-hidden bg-navy-900 p-8 text-ivory-50">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brass-500/25 blur-[70px]" />
                <p className="eyebrow on-dark relative">Danışmanlık</p>
                <p className="relative mt-5 font-serif text-3xl leading-tight">
                  {area.title} alanında bir sorunuz mu var?
                </p>
                <div className="relative mt-8 flex flex-col gap-3">
                  <Link href="/iletisim" className="btn btn-brass">
                    Randevu Talebi <Icon name="arrow" className="size-4" />
                  </Link>
                  <a href={site.phoneHref} className="btn btn-outline-light">
                    <Icon name="phone" className="size-4" /> {site.phone}
                  </a>
                </div>
              </div>

              <nav aria-label="Diğer çalışma alanları" className="border border-navy-900/10 bg-ivory-50 p-8">
                <p className="eyebrow">Diğer Alanlar</p>
                <ul className="mt-6">
                  {practiceAreas
                    .filter((a) => a.slug !== area.slug)
                    .map((a) => (
                      <li key={a.slug} className="border-b border-navy-900/10 last:border-0">
                        <Link
                          href={`/calisma-alanlari/${a.slug}`}
                          className="group flex items-center justify-between py-3.5 text-sm font-medium text-navy-700 transition-colors hover:text-brass-700"
                        >
                          {a.title}
                          <Icon
                            name="arrow"
                            className="size-4 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
