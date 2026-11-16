import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="bg-ivory-100 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="grain relative overflow-hidden bg-navy-900 px-8 py-16 text-ivory-50 md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 size-96 rounded-full bg-brass-500/20 blur-[100px]"
          />
          <div className="relative grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow on-dark">Ön Görüşme</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">
                Hukuki sürecinizi <em className="text-brass-400">birlikte</em> değerlendirelim.
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Link href="/iletisim" className="btn btn-brass w-full md:w-auto">
                Randevu Talebi Oluştur <Icon name="arrow" className="size-4" />
              </Link>
              <a href={site.phoneHref} className="btn btn-outline-light w-full md:w-auto">
                <Icon name="phone" className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
