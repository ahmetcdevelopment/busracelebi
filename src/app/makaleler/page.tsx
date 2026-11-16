import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Makaleler",
  description: "Güncel hukuki gelişmeler ve sık karşılaşılan hukuki konulara ilişkin bilgilendirici yazılar.",
  alternates: { canonical: "/makaleler" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bilgi Merkezi"
        title={
          <>
            Hukuki <em className="text-brass-400">Makaleler</em>
          </>
        }
        lead="Sık karşılaşılan hukuki konulara ve güncel mevzuat değişikliklerine ilişkin genel bilgilendirme yazıları."
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Makaleler" }]}
      />
      <section className="bg-ivory-50 py-24 md:py-32">
        <div className="container-x grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 110}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
