import Image from "next/image";
import portrait from "../../public/images/av-busra-celebi.jpg";
import { site } from "@/lib/site";

/**
 * Lawyer portrait with brand treatment: offset brass frame, navy gradient that
 * calms the busy background, and a caption — keeps the photo inside the 60/30/10 palette.
 * Source is 447×447, so `sizes` caps the rendered width to avoid visible upscaling.
 */
export function Portrait({ caption = true, priority = false }: { caption?: boolean; priority?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full border border-brass-500 md:-left-6 md:-top-6" />
      <figure className="group relative aspect-[4/5] overflow-hidden bg-navy-900">
        <Image
          src={portrait}
          alt={`${site.lawyer} portresi`}
          fill
          placeholder="blur"
          priority={priority}
          sizes="(min-width: 1024px) 460px, 90vw"
          className="object-cover object-[78%_30%] transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.04]"
        />
        {/* Brand grading: navy fade from the bottom and a faint navy wash on the left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950/45 to-transparent" />
        {caption && (
          <figcaption className="absolute inset-x-0 bottom-0 p-7 md:p-8">
            <span className="block h-px w-10 bg-brass-500" />
            <span className="mt-4 block font-serif text-3xl text-ivory-50">{site.lawyer}</span>
            <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.3em] text-brass-400">
              Kurucu Avukat · {site.bar}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
