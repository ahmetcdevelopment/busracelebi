import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PracticeCard } from "@/components/practice-card";
import { Reveal } from "@/components/reveal";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Çalışma Alanları",
  description:
    "Ceza, aile, iş, ticaret, gayrimenkul, miras, icra ve tazminat hukukunda danışmanlık ve dava takibi.",
  alternates: { canonical: "/calisma-alanlari" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Uzmanlık"
        title={
          <>
            Çalışma <em className="text-brass-400">Alanlarımız</em>
          </>
        }
        lead="Bireysel ve kurumsal müvekkillerimizin hukuki ihtiyaçlarına; danışmanlık, sözleşme yönetimi ve dava takibini kapsayan bütüncül bir yaklaşımla yanıt veriyoruz."
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "Çalışma Alanları" }]}
      />
      <section className="bg-ivory-50 py-24 md:py-32">
        <div className="container-x">
          <div className="grid border-l border-t border-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 4) * 90}>
                <PracticeCard area={area} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
