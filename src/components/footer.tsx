import { cacheLife } from "next/cache";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { practiceAreas } from "@/lib/practice-areas";
import { Icon } from "./icons";
import { Logo } from "./logo";

/** Cached so pages stay statically prerendered under Cache Components. */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-navy-950 text-ivory-100">
      {/* Oversized wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[22vw] leading-none text-ivory-50/[0.03]"
      >
        Büşra Çelebi
      </div>

      <div className="container-x relative">
        <div className="grid gap-14 border-b border-ivory-50/10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-7 max-w-sm text-sm leading-7 text-navy-300">{site.description}</p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm text-ivory-100 transition-colors hover:text-brass-400"
            >
              <span className="grid size-10 place-items-center border border-ivory-50/15">
                <Icon name="instagram" className="size-4" />
              </span>
              @busracelebihukukburosu
            </a>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow on-dark mb-6 before:hidden">Kurumsal</h2>
            <ul className="space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-line text-navy-300 transition-colors hover:text-ivory-50">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/kvkk" className="link-line text-navy-300 transition-colors hover:text-ivory-50">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow on-dark mb-6 before:hidden">Çalışma Alanları</h2>
            <ul className="space-y-3 text-sm">
              {practiceAreas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/calisma-alanlari/${a.slug}`}
                    className="link-line text-navy-300 transition-colors hover:text-ivory-50"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow on-dark mb-6 before:hidden">İletişim</h2>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brass-400" />
                <span className="text-navy-300">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-brass-400" />
                <a href={site.phoneHref} className="text-ivory-100 hover:text-brass-400">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brass-400" />
                <a href={`mailto:${site.email}`} className="text-ivory-100 hover:text-brass-400">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brass-400" />
                <span className="text-navy-300">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-navy-300 md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="max-w-xl md:text-right">
            Bu sitedeki içerikler yalnızca genel bilgilendirme amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
            Avukatlık Kanunu ve Türkiye Barolar Birliği meslek kurallarına uygun olarak hazırlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}
