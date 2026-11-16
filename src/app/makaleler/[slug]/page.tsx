import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { articles, formatDate, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/makaleler/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/makaleler/${article.slug}` },
    openGraph: { type: "article", publishedTime: article.date },
  };
}

export default async function ArticlePage(props: PageProps<"/makaleler/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[
          { href: "/", label: "Ana Sayfa" },
          { href: "/makaleler", label: "Makaleler" },
          { label: article.category },
        ]}
      />

      <section className="bg-ivory-50 py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-navy-900/10 pb-8 text-xs uppercase tracking-[0.2em] text-navy-500">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>{article.readMinutes} dk okuma</span>
            </div>

            <div className="prose-legal text-[1.075rem]">
              {article.body.map((b, i) => {
                if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
                if (b.type === "ul")
                  return (
                    <ul key={i}>
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                return (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-brass-600"
                        : undefined
                    }
                  >
                    {b.text}
                  </p>
                );
              })}
            </div>

            <aside className="mt-14 border-l-2 border-brass-500 bg-ivory-100 p-6 text-sm leading-7 text-navy-700">
              Bu yazı genel bilgilendirme amacı taşımakta olup hukuki görüş niteliğinde değildir. Somut
              durumunuza ilişkin değerlendirme için bir avukata danışmanız önerilir.
            </aside>

            <Link
              href="/makaleler"
              className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brass-700"
            >
              <Icon name="arrow" className="size-4 rotate-180" /> Tüm makaleler
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-900/10 bg-ivory-100 py-20 md:py-28">
          <div className="container-x">
            <p className="eyebrow">Diğer Yazılar</p>
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
