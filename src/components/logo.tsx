import Link from "next/link";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-ivory-50" : "text-navy-900";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Büşra Çelebi Hukuk Bürosu — Ana sayfa">
      <span className="relative grid size-11 place-items-center border border-brass-500/70 transition-colors duration-500 group-hover:bg-brass-500">
        <span
          className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-navy-950 ${text}`}
        >
          BÇ
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.35rem] font-medium tracking-wide ${text}`}>Büşra Çelebi</span>
        <span
          className={`mt-1 text-[0.6rem] font-bold uppercase tracking-[0.34em] ${
            tone === "light" ? "text-brass-400" : "text-brass-700"
          }`}
        >
          Hukuk Bürosu
        </span>
      </span>
    </Link>
  );
}
