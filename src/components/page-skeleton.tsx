/** Branded loading shell — mirrors <PageHero /> so navigations feel instant. */
export function PageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Yükleniyor">
      <section className="grain relative overflow-hidden bg-navy-950 pb-20 pt-40 md:pb-28 md:pt-48">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div className="container-x relative animate-pulse space-y-6">
          <div className="h-3 w-40 bg-ivory-50/10" />
          <div className="h-3 w-28 bg-brass-500/40" />
          <div className="h-16 w-full max-w-2xl bg-ivory-50/10 md:h-24" />
        </div>
      </section>
      <section className="bg-ivory-100 py-24">
        <div className="container-x animate-pulse space-y-4">
          <div className="h-4 w-full max-w-3xl bg-navy-900/10" />
          <div className="h-4 w-full max-w-2xl bg-navy-900/10" />
          <div className="h-4 w-full max-w-xl bg-navy-900/10" />
        </div>
      </section>
    </div>
  );
}
