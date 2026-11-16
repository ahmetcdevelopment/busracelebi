import type { IconName } from "@/components/icons";

export type PracticeArea = {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  intro: string[];
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    icon: "scale",
    summary:
      "Soruşturma evresinden kanun yolu aşamasına kadar şüpheli, sanık ve mağdur haklarının titizlikle korunması.",
    intro: [
      "Ceza yargılaması, kişi özgürlüğünü doğrudan etkileyen ve her aşamasında hızlı, doğru karar verilmesini gerektiren bir süreçtir. İfade alma anından itibaren hukuki destek almak, savunma hakkının etkin kullanılmasının temelidir.",
      "Büromuz; soruşturma ve kovuşturma evrelerinde şüpheli, sanık, müşteki ve katılan vekilliği üstlenerek dosyanın her aşamasını yakından takip eder.",
    ],
    services: [
      "Soruşturma aşamasında ifade ve sorgu süreçlerinde müdafilik",
      "Tutukluluğa ve adli kontrole itiraz",
      "Ağır ceza ve asliye ceza mahkemelerinde savunma",
      "Mağdur ve müşteki vekilliği, suç duyurusu",
      "İstinaf ve temyiz kanun yolu başvuruları",
    ],
  },
  {
    slug: "aile-hukuku",
    title: "Aile ve Boşanma Hukuku",
    icon: "family",
    summary:
      "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesinde hassas ve çözüm odaklı temsil.",
    intro: [
      "Aile hukuku uyuşmazlıkları, hukuki olduğu kadar duygusal yönü de ağır basan süreçlerdir. Büromuz bu dosyalarda gizliliği ve tarafların, özellikle çocukların üstün yararını önceleyen bir yaklaşım benimser.",
      "Anlaşmalı boşanma protokollerinin hazırlanmasından çekişmeli davaların yürütülmesine, mal paylaşımından velayet düzenlemelerine kadar sürecin tamamında yanınızdayız.",
    ],
    services: [
      "Anlaşmalı boşanma protokolü hazırlanması",
      "Çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki tesisi ve nafaka davaları",
      "Mal rejiminin tasfiyesi ve katkı payı alacağı",
      "6284 sayılı Kanun kapsamında koruma tedbirleri",
    ],
  },
  {
    slug: "is-hukuku",
    title: "İş Hukuku",
    icon: "briefcase",
    summary:
      "İşçi ve işveren tarafında arabuluculuk, işe iade ve işçilik alacaklarına ilişkin uyuşmazlıklarda danışmanlık.",
    intro: [
      "İş ilişkisinin kurulmasından sona ermesine kadar doğan uyuşmazlıklarda zorunlu arabuluculuk aşaması da dahil olmak üzere işçi ve işverenlere hukuki destek sağlıyoruz.",
      "Kurumsal müvekkillerimiz için iş sözleşmeleri, iç yönetmelikler ve fesih süreçlerine yönelik önleyici danışmanlık hizmeti sunuyoruz.",
    ],
    services: [
      "İşe iade davaları",
      "Kıdem, ihbar ve fazla mesai alacakları",
      "Zorunlu arabuluculuk süreçlerinde temsil",
      "İş kazası ve meslek hastalığından doğan tazminat",
      "İş sözleşmesi ve personel yönetmeliği hazırlanması",
    ],
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret ve Şirketler Hukuku",
    icon: "building",
    summary:
      "Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklarda işletmelerin hukuki risklerini yöneten danışmanlık.",
    intro: [
      "İşletmelerin sürdürülebilir büyümesi, sağlam bir hukuki altyapıya dayanır. Büromuz şirketlerin kuruluşundan günlük ticari faaliyetlerine kadar geniş bir alanda danışmanlık hizmeti sunar.",
      "Ticari uyuşmazlıklarda zorunlu arabuluculuk, dava ve icra takibi süreçlerini bütüncül bir stratejiyle yönetiriz.",
    ],
    services: [
      "Şirket kuruluşu, ana sözleşme ve genel kurul işlemleri",
      "Ticari sözleşmelerin hazırlanması ve müzakeresi",
      "Ticari alacak ve tazminat davaları",
      "Kambiyo senetlerine dayalı uyuşmazlıklar",
      "Sürekli hukuki danışmanlık (retainer) hizmeti",
    ],
  },
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul ve İnşaat Hukuku",
    icon: "home",
    summary:
      "Tapu, kira, kat mülkiyeti ve kat karşılığı inşaat sözleşmelerinde güvenli işlem ve etkin uyuşmazlık çözümü.",
    intro: [
      "Gayrimenkul işlemleri yüksek ekonomik değer taşıdığından, işlem öncesi hukuki inceleme olası uyuşmazlıkların önüne geçmenin en etkili yoludur.",
      "Büromuz alım-satım, kira ve inşaat süreçlerinde sözleşme hazırlığından dava takibine kadar müvekkillerine eşlik eder.",
    ],
    services: [
      "Tapu iptali ve tescil davaları",
      "Kira tespiti ve tahliye davaları",
      "Kat karşılığı inşaat sözleşmeleri",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Kat mülkiyeti ve site yönetimi uyuşmazlıkları",
    ],
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    icon: "scroll",
    summary:
      "Vasiyetname, mirasın reddi, tenkis ve paylaştırma süreçlerinde mirasçıların haklarının korunması.",
    intro: [
      "Miras hukuku; süreleri kısa, sonuçları kalıcı işlemler içerir. Mirasın reddi gibi hak düşürücü sürelere bağlı işlemlerde zamanında hukuki destek almak büyük önem taşır.",
      "Sağlararası planlama ve vasiyetname hazırlığından ölüm sonrası paylaştırma süreçlerine kadar danışmanlık sunuyoruz.",
    ],
    services: [
      "Veraset ilamı (mirasçılık belgesi) alınması",
      "Vasiyetname hazırlanması ve iptali davaları",
      "Mirasın reddi işlemleri",
      "Tenkis ve muris muvazaası davaları",
      "Miras ortaklığının paylaştırılması",
    ],
  },
  {
    slug: "icra-iflas-hukuku",
    title: "İcra ve İflas Hukuku",
    icon: "gavel",
    summary:
      "Alacakların hızlı ve etkin tahsili ile borçlu tarafında itiraz ve şikâyet süreçlerinin yönetimi.",
    intro: [
      "Alacağın doğru takip yoluyla, doğru zamanda talep edilmesi tahsil kabiliyetini doğrudan etkiler. Büromuz bireysel ve kurumsal alacaklılar için icra takiplerini sistematik biçimde yürütür.",
      "Borçlu tarafında ise takibe itiraz, menfi tespit ve şikâyet yollarıyla müvekkillerimizin haklarını koruruz.",
    ],
    services: [
      "İlamlı ve ilamsız icra takipleri",
      "Kambiyo senetlerine dayalı takipler",
      "İtirazın iptali ve kaldırılması davaları",
      "Menfi tespit ve istirdat davaları",
      "Konkordato ve iflas süreçleri",
    ],
  },
  {
    slug: "tazminat-hukuku",
    title: "Sigorta ve Tazminat Hukuku",
    icon: "shield",
    summary:
      "Trafik kazaları, sigorta uyuşmazlıkları ve haksız fiillerden doğan maddi ve manevi tazminat talepleri.",
    intro: [
      "Trafik kazaları ve haksız fiiller sonucunda uğranılan zararların tazmini, teknik bilirkişi incelemesi ve sigorta mevzuatına hakimiyet gerektirir.",
      "Sigorta şirketlerine başvuru, Sigorta Tahkim Komisyonu ve mahkeme süreçlerinde zarar görenleri temsil ediyoruz.",
    ],
    services: [
      "Trafik kazasından doğan maddi ve manevi tazminat",
      "Destekten yoksun kalma tazminatı",
      "Sigorta Tahkim Komisyonu başvuruları",
      "Değer kaybı ve araç hasar talepleri",
      "Hizmet kusurundan doğan tazminat davaları",
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((a) => a.slug === slug);
}
