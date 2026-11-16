export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMinutes: number;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "anlasmali-bosanma-sureci",
    title: "Anlaşmalı Boşanma Süreci: Şartlar ve Adımlar",
    excerpt:
      "Türk Medeni Kanunu'nun 166/3. maddesi kapsamında anlaşmalı boşanmanın şartları, protokolün içeriği ve duruşma süreci.",
    category: "Aile Hukuku",
    date: "2026-10-28",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Anlaşmalı boşanma, eşlerin evlilik birliğini sona erdirme ve bunun sonuçları konusunda uzlaştıkları durumlarda başvurulan, çekişmeli davaya kıyasla çok daha kısa sürede sonuçlanabilen bir yoldur. Düzenleme Türk Medeni Kanunu'nun 166. maddesinin üçüncü fıkrasında yer alır.",
      },
      { type: "h2", text: "Anlaşmalı boşanmanın şartları" },
      {
        type: "ul",
        items: [
          "Evliliğin en az bir yıl sürmüş olması gerekir.",
          "Eşlerin mahkemeye birlikte başvurması ya da eşlerden birinin açtığı davayı diğerinin kabul etmesi gerekir.",
          "Hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi gerekir.",
          "Boşanmanın mali sonuçları ve çocukların durumu hakkında tarafların kabul ettiği düzenlemenin hâkim tarafından uygun bulunması gerekir.",
        ],
      },
      { type: "h2", text: "Protokolde neler yer almalı?" },
      {
        type: "p",
        text: "Boşanma protokolü; velayet, çocukla kişisel ilişki, iştirak ve yoksulluk nafakası, maddi-manevi tazminat ve mal paylaşımı gibi konuları açık ve uygulanabilir biçimde düzenlemelidir. Belirsiz bırakılan hususlar, boşanma sonrasında yeni uyuşmazlıklara kapı aralayabilir.",
      },
      {
        type: "p",
        text: "Hâkim, protokolde tarafların veya çocukların menfaatine aykırı gördüğü düzenlemelerde değişiklik yapabilir; taraflar bu değişikliği kabul ederse boşanmaya karar verilir.",
      },
      { type: "h2", text: "Sonuç" },
      {
        type: "p",
        text: "Anlaşmalı boşanma hızlı bir süreç olsa da protokolün özenle hazırlanması kalıcı sonuçlar doğurur. Her somut olayın kendine özgü koşulları bulunduğundan, protokol hazırlığında bir avukattan destek alınması tavsiye edilir.",
      },
    ],
  },
  {
    slug: "ise-iade-davasi",
    title: "İşe İade Davası: Kimler Açabilir, Süreler Nelerdir?",
    excerpt:
      "İş güvencesi kapsamındaki işçiler için işe iade yolu, zorunlu arabuluculuk aşaması ve kaçırılmaması gereken süreler.",
    category: "İş Hukuku",
    date: "2026-09-15",
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "4857 sayılı İş Kanunu, belirli şartları taşıyan işçilere iş güvencesi sağlar. İş sözleşmesi geçerli bir neden gösterilmeden feshedilen işçi, işe iade talebinde bulunabilir.",
      },
      { type: "h2", text: "İş güvencesinden yararlanma şartları" },
      {
        type: "ul",
        items: [
          "İşyerinde otuz veya daha fazla işçi çalışıyor olması,",
          "İşçinin en az altı aylık kıdeminin bulunması,",
          "İş sözleşmesinin belirsiz süreli olması,",
          "İşçinin işveren vekili niteliğinde olmaması.",
        ],
      },
      { type: "h2", text: "Zorunlu arabuluculuk ve süreler" },
      {
        type: "p",
        text: "7036 sayılı İş Mahkemeleri Kanunu uyarınca işe iade talebiyle dava açılmadan önce arabulucuya başvurulması dava şartıdır. Başvuru, fesih bildiriminin tebliğinden itibaren bir ay içinde yapılmalıdır.",
      },
      {
        type: "p",
        text: "Arabuluculuk görüşmelerinin anlaşmazlıkla sonuçlanması hâlinde, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılmalıdır. Bu süreler hak düşürücü niteliktedir.",
      },
      { type: "h2", text: "Davanın olası sonuçları" },
      {
        type: "p",
        text: "Feshin geçersizliğine karar verilmesi hâlinde işçi, kesinleşen kararın tebliğinden itibaren on iş günü içinde işe başlamak için işverene başvurmalıdır. İşverenin işçiyi işe başlatmaması durumunda iş güvencesi tazminatı ve boşta geçen süreye ilişkin ücret gündeme gelir.",
      },
    ],
  },
  {
    slug: "mirasin-reddi",
    title: "Mirasın Reddi: Üç Aylık Sürenin Önemi",
    excerpt:
      "Borçlu bir terekenin mirasçıları için mirasın reddi, hak düşürücü süre ve hükmen ret halleri.",
    category: "Miras Hukuku",
    date: "2026-08-02",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Türk hukukunda mirasçılar, miras bırakanın ölümüyle mirası kendiliğinden kazanır. Bu kazanım aktif değerlerle birlikte borçları da kapsar. Terekenin borca batık olması hâlinde mirasçıların başvurabileceği temel yol mirasın reddidir.",
      },
      { type: "h2", text: "Ret süresi" },
      {
        type: "p",
        text: "Türk Medeni Kanunu'nun 606. maddesine göre mirası ret süresi üç aydır. Bu süre, yasal mirasçılar için mirasçı olduklarını öğrenmedikleri ispat edilmedikçe miras bırakanın ölümünü öğrendikleri tarihten itibaren işlemeye başlar.",
      },
      { type: "h2", text: "Ret beyanı nasıl yapılır?" },
      {
        type: "p",
        text: "Ret beyanı, miras bırakanın son yerleşim yeri sulh hukuk mahkemesine sözlü veya yazılı olarak yapılır. Beyanın kayıtsız ve şartsız olması gerekir.",
      },
      { type: "h2", text: "Hükmen ret" },
      {
        type: "p",
        text: "Ölüm tarihinde miras bırakanın ödemeden aczi açıkça belli veya resmen tespit edilmişse miras reddedilmiş sayılır. Bu hâlde süre şartı aranmaksızın tespit davası açılabilir; ancak mirasçının terekeye ilişkin tasarruf işlemleri bu imkânı ortadan kaldırabilir.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
