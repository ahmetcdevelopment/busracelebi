import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  alternates: { canonical: "/kvkk" },
  robots: { index: false },
};

// TODO: have the final text reviewed by the firm before going live.
export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        crumbs={[{ href: "/", label: "Ana Sayfa" }, { label: "KVKK" }]}
      />
      <section className="bg-ivory-50 py-20 md:py-28">
        <div className="container-x">
          <div className="prose-legal mx-auto max-w-3xl">
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla{" "}
              {site.name} olarak kişisel verilerinizin işlenmesine ilişkin sizi bilgilendirmek isteriz.
            </p>
            <h2>İşlenen kişisel veriler</h2>
            <p>
              İletişim formu aracılığıyla paylaştığınız ad-soyad, telefon numarası, e-posta adresi ve
              talebinize ilişkin açıklamalar işlenmektedir.
            </p>
            <h2>İşleme amaçları ve hukuki sebep</h2>
            <p>
              Kişisel verileriniz; talebinize dönüş yapılması ve randevu oluşturulması amacıyla, KVKK
              m.5/2-c (bir sözleşmenin kurulmasıyla doğrudan ilgili olması) ve m.5/2-f (meşru menfaat)
              hukuki sebeplerine dayanılarak işlenmektedir.
            </p>
            <h2>Aktarım</h2>
            <p>
              Kişisel verileriniz, yasal yükümlülükler dışında üçüncü kişilerle paylaşılmamaktadır.
            </p>
            <h2>Haklarınız</h2>
            <p>
              KVKK m.11 kapsamındaki haklarınıza ilişkin taleplerinizi {site.email} adresine
              iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
