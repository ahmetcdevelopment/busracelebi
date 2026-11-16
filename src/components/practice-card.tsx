import Link from "next/link";
import type { PracticeArea } from "@/lib/practice-areas";
import { Icon } from "./icons";

export function PracticeCard({ area, index }: { area: PracticeArea; index: number }) {
  return (
    <Link
      href={`/calisma-alanlari/${area.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border-b border-r border-navy-900/10 bg-ivory-50 p-8 transition-colors duration-700 ease-out-expo hover:text-ivory-50 md:p-10"
    >
      {/* Navy curtain rises on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-0 translate-y-full bg-navy-900 transition-transform duration-700 ease-out-expo group-hover:translate-y-0"
      />
      <span className="relative flex items-start justify-between">
        <span className="grid size-14 place-items-center border border-navy-900/15 text-brass-600 transition-colors duration-700 group-hover:border-brass-500/50 group-hover:text-brass-400">
          <Icon name={area.icon} className="size-6" />
        </span>
        <span className="font-serif text-lg italic text-navy-300 transition-colors duration-700 group-hover:text-brass-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>
      <h3 className="relative mt-10 font-serif text-[1.75rem] leading-tight">{area.title}</h3>
      <p className="relative mt-4 flex-1 text-sm leading-7 text-navy-500 transition-colors duration-700 group-hover:text-navy-300">
        {area.summary}
      </p>
      <span className="relative mt-8 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brass-700 transition-colors duration-700 group-hover:text-brass-400">
        Detaylı Bilgi
        <Icon name="arrow" className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
