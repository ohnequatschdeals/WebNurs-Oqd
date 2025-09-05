"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16">
      {/* neon çizgi */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-secondary), var(--color-accent), var(--color-hover), transparent)",
          boxShadow: "0 0 20px rgba(0,255,200,.25)",
        }}
      />
      <div className="container py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-white/70">
          © {year} webNurs / ohnequatschdeals.de — All rights reserved.
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Datenschutz</a>
          <a href="#" className="hover:underline">AGB</a>
          <span className="badge-premium">Premium</span>
        </nav>
      </div>
    </footer>
  );
}
