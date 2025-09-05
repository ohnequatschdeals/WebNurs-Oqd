"use client";
import { useI18n, useI18nStore, Locale } from "@/i18n/I18nProvider";
import { Globe } from "lucide-react";

export default function LanguageSwitcher(){
  const { locale, t } = useI18n();
  const { setLocale } = useI18nStore();
  const ALL:Locale[]=["de","en","tr","fr","es","it","ru","pl","nl","ar","zh","ja"];
  return (
    <div className="relative">
      <details className="group">
        <summary className="list-none cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
          <Globe size={16}/> {locale.toUpperCase()}
        </summary>
        <div className="absolute right-0 mt-2 w-44 max-h-64 overflow-auto rounded-xl border border-white/10 bg-black/70 backdrop-blur-xl p-2 space-y-1 z-50">
          {ALL.map(l=>(
            <button key={l} onClick={()=>setLocale(l)}
              className={`w-full text-left px-3 py-2 rounded-md hover:bg-white/10 ${locale===l ? "bg-white/10" : ""}`}>
              {t(`lang.${l}`) || l.toUpperCase()}
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}
