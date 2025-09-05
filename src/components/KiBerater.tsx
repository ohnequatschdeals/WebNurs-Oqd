"use client";
import Image from "next/image";
import advisors from "@/data/advisors.json";
import { useI18n } from "@/i18n/I18nProvider";
import { MessageCircle } from "lucide-react";

export default function KiBerater() {
  const { t } = useI18n();

  return (
    <section id="advisor" className="space-y-12">
      {/* OQD-Berater special block */}
      <div className="glass glow gradient-border flex flex-col md:flex-row items-center gap-8 rounded-xl p-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">OQD-Berater</h2>
          <p className="text-white/80 mb-6">
            {t("advisors.oqdDescription") ||
              "Erleben Sie die Zukunft der Beratung – Ihr persönlicher KI-Avatar kommt bald!"}
          </p>
          <button className="btn btn-accent flex items-center gap-2">
            <MessageCircle size={18} />
            Chat starten
          </button>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/assets/berater.png"
            alt="OQD-Berater Avatar"
            width={280}
            height={400}
            className="rounded-2xl object-cover glow"
          />
        </div>
      </div>

      {/* Human advisors list */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">{t("advisors.title")}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <div
              key={a.handle}
              className="glass glow gradient-border rounded-xl p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80">{a.name}</span>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs">
                  {a.channel}
                </span>
              </div>
              <p className="mb-4 text-white/70">{a.handle}</p>
              <a
                className="btn w-full"
                href={`https://wa.me/${a.handle.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
