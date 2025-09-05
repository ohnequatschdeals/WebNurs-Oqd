"use client";
import Image from "next/image";

export default function BeraterHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Chat mit OQD-Berater
          </h1>
          <p className="mt-4 text-lg text-text/80">
            Hallo! Ich bin dein persönlicher OQD-Berater und helfe dir bei allen
            Fragen zu OhneQuatschDeals.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/Berater.png"
            alt="OQD Berater"
            width={400}
            height={600}
            priority
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
