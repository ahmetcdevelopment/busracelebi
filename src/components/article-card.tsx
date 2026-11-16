import Link from "next/link";
import { formatDate, type Article } from "@/lib/articles";
import { Icon } from "./icons";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/makaleler/${article.slug}`} className="group flex h-full flex-col border-t border-navy-900 pt-7">
      <div className="flex items-center justify-between text-[0.7rem] font-bold uppercase tracking-[0.2em]">
        <span className="text-brass-700">{article.category}</span>
        <time dateTime={article.date} className="text-navy-500">
          {formatDate(article.date)}
        </time>
      </div>
      <h3 className="mt-6 font-serif text-3xl leading-[1.15] transition-colors duration-500 group-hover:text-brass-700">
        {article.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-navy-500">{article.excerpt}</p>
      <span className="mt-8 flex items-center justify-between text-xs text-navy-500">
        {article.readMinutes} dk okuma
        <span className="grid size-11 place-items-center rounded-full border border-navy-900/15 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-brass-500 group-hover:bg-brass-500 group-hover:text-navy-950">
          <Icon name="arrow" className="size-4" />
        </span>
      </span>
    </Link>
  );
}
