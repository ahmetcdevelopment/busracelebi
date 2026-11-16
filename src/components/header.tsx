"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu is "open for a given path" — navigating elsewhere closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (fn: (v: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out-expo ${
        scrolled || open
          ? "bg-navy-950/90 py-3 shadow-[0_1px_0_rgb(184_145_90/0.25)] backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`link-line pb-1 text-[0.8rem] font-semibold tracking-[0.08em] transition-colors ${
                    isActive(item.href) ? "text-brass-400" : "text-ivory-100 hover:text-brass-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ivory-100 transition-colors hover:text-brass-300"
          >
            <Icon name="phone" className="size-4 text-brass-400" />
            {site.phone}
          </a>
          <Link href="/iletisim" className="btn btn-brass !px-5 !py-3">
            Randevu Al
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center border border-ivory-50/20 text-ivory-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>
    </header>

      {/* Mobile menu — a sibling of <header>, because the header's backdrop-filter
          would otherwise become the containing block for this fixed element. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[68px] z-40 bg-navy-950 transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobil menü" className="container-x flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={`border-b border-ivory-50/10 transition-all duration-700 ease-out-expo ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-5 font-serif text-3xl ${
                    isActive(item.href) ? "text-brass-400" : "text-ivory-50"
                  }`}
                >
                  {item.label}
                  <Icon name="arrowUpRight" className="size-5 text-brass-500" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a href={site.phoneHref} className="btn btn-brass w-full">
              <Icon name="phone" className="size-4" /> {site.phone}
            </a>
            <p className="text-center text-xs tracking-widest text-navy-300 uppercase">{site.hours}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
