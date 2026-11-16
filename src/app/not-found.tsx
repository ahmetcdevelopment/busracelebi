import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="grain on-dark relative flex min-h-dvh items-center overflow-hidden bg-navy-950 text-ivory-50">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />
      <div className="container-x relative">
        <p className="eyebrow">Hata 404</p>
        <h1 className="display mt-6 text-6xl md:text-8xl">
          Aradığınız sayfa <em className="text-brass-400">bulunamadı.</em>
        </h1>
        <Link href="/" className="btn btn-brass mt-12">
          Ana Sayfaya Dön <Icon name="arrow" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
