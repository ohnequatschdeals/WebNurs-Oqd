"use client";
import offers from "@/data/offers.json";

function Badge({label, tone}:{label:string; tone:"pink"|"teal"|"violet"}) {
  const map = {
    pink: "from-[#FF3D8D] to-[#FF7AB3]",
    teal: "from-[#00FFC8] to-[#59FFD9]",
    violet: "from-[#7E3FFF] to-[#A07BFF]",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${map[tone]} shadow-[0_0_20px_rgba(0,0,0,.25)]`}>
      {label}
    </span>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="container py-10">
      <div className="text-center mb-8">
        <h2 className="gradient-text text-3xl md:text-4xl font-extrabold">Premium-Angebote</h2>
        <p className="mt-2 text-white/70">Exklusive Deals mit den besten Konditionen — nur bei uns verfügbar.</p>
      </div>

      {/* eşit yükseklik için items-stretch + her kartta h-full + flex-col */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {offers.map((o) => (
          <article
            key={o.id}
            className="h-full flex flex-col rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-5 shadow-[0_20px_80px_-40px_rgba(0,0,0,.6)]"
          >
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
            <div className="flex items-start justify-between">
              <Badge label={o.badge} tone={o.badgeTone as "pink"|"teal"|"violet"} />
              <span className="text-xs text-white/60">{o.brand}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">{o.title}</h3>

            <div className="mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">{o.priceNow}</span>
                {o.priceOld && <span className="text-sm text-white/40 line-through">{o.priceOld}</span>}
              </div>
              <div className="text-xs text-white/60 mt-0.5">{o.priceUnit}</div>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-white/80">
              {(o.features || []).map((f:string) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* push CTA to bottom */}
            <div className="flex-1" />
            <a href="#" className="mt-6 w-full btn-oqd-primary inline-flex items-center justify-center">
              Angebot sichern
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
