export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* neon blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 blur-3xl"
        style={{
          background:
            "radial-gradient(600px circle at 15% 10%, #FF3D8D33, transparent 40%), radial-gradient(700px circle at 80% 20%, #7E3FFF33, transparent 45%), radial-gradient(600px circle at 50% 85%, #00FFC833, transparent 40%)",
        }}
      />
      <div className="container relative py-12 md:py-16 text-center">
        <h1 className="gradient-text text-4xl md:text-6xl leading-tight font-extrabold">
          Digital. Persönlich. <span className="whitespace-nowrap">Ohne Quatsch.</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-white/75">
          Ehrliche Beratung für Internet, Mobilfunk, Strom, Gas & Kredite – transparent, fair
          und ohne versteckte Kosten.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#offers" className="btn-oqd-primary">Angebote entdecken</a>
          <a href="/berater" className="btn-oqd-secondary">Berater finden</a>
        </div>
      </div>
    </section>
  );
}
