import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="grain on-dark relative overflow-hidden bg-navy-950 pb-20 pt-40 text-ivory-50 md:pb-28 md:pt-48">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-brass-500/15 blur-[120px]"
      />
      <div className="container-x relative">
        <nav aria-label="Sayfa konumu" className="mb-10 animate-fade-up">
          <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wider text-navy-300">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="link-line hover:text-ivory-50">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-brass-400">
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow animate-fade-up [animation-delay:100ms]">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl animate-fade-up text-5xl [animation-delay:200ms] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-8 text-navy-300 [animation-delay:300ms]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
