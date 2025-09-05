"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

type NavItem = { label:string; href?:string; submenu?: { label:string; href:string }[] };

const NAV:NavItem[] = [
  { label:"Home", href:"/" },
  { label:"Angebote", submenu:[
    { label:"Alle Angebote", href:"/#offers" },
    { label:"Internet & TV", href:"/kategorie/internet-tv" },
    { label:"Mobilfunk", href:"/kategorie/mobilfunk" },
    { label:"Strom & Gas", href:"/kategorie/strom-gas" },
    { label:"Kredite", href:"/kategorie/kredite" },
  ]},
  { label:"Berater", href:"/berater" },
  { label:"Warum wir?", href:"/warum-wir" },
];

export default function Header(){
  const [isScrolled,setIsScrolled]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [openDrop,setOpenDrop]=useState<string|null>(null);

  useEffect(()=>{
    const onScroll=()=>setIsScrolled(window.scrollY>16);
    onScroll();
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  return (
    <header className={`sticky top-0 z-50 transition-all ${isScrolled ? "bg-[#1F1F2D]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative font-bold text-lg">
          <span className="gradient-text">OhneQuatschDeals.de</span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#FF3D8D] to-[#00FFC8] transition-all duration-300 group-hover:w-full"/>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map(item=>(
            <div key={item.label} className="relative"
                 onMouseEnter={()=>item.submenu && setOpenDrop(item.label)}
                 onMouseLeave={()=>setOpenDrop(null)}>
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 px-3 py-2 rounded-xl text-white/80 hover:text-[#FF3D8D] hover:bg-[#FF3D8D]/10">
                    {item.label} <ChevronDown className={`w-4 h-4 transition-transform ${openDrop===item.label?"rotate-180":""}`}/>
                  </button>
                  {openDrop===item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#1A0E23]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-hidden">
                      {item.submenu.map(s=>(
                        <Link key={s.href} href={s.href} className="block px-4 py-3 text-white/80 hover:text-[#FF3D8D] hover:bg-[#FF3D8D]/10">{s.label}</Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href!} className="px-3 py-2 rounded-xl text-white/80 hover:text-[#FF3D8D] hover:bg-[#FF3D8D]/10">
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Right actions */}
          <div className="ml-2 flex items-center gap-3">
            <details className="relative">
              <summary className="list-none cursor-pointer px-3 py-2 rounded-xl text-white/80 hover:text-[#FF3D8D] hover:bg-[#FF3D8D]/10 inline-flex items-center gap-1">
                Login <ChevronDown className="w-4 h-4"/>
              </summary>
              <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-[#1A0E23]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] overflow-hidden">
                <Link href="/login" className="block px-4 py-3 text-white/80 hover:text-[#FF3D8D] hover:bg-[#FF3D8D]/10">Kunden Login</Link>
                <Link href="/berater-login" className="block px-4 py-3 text-white/80 hover:text-[#00FFC8] hover:bg-[#00FFC8]/10">Berater Login</Link>
                <Link href="/admin" className="block px-4 py-3 text-white/80 hover:text-[#FFD166] hover:bg-[#FFD166]/10">Admin</Link>
              </div>
            </details>

            <Link href="/berater" className="btn-oqd-primary whitespace-nowrap">Jetzt beraten lassen</Link>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-white/80 hover:text-[#FF3D8D]" onClick={()=>setMobileOpen(v=>!v)} aria-label="Menü">
          {mobileOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#1A0E23]/95 backdrop-blur-xl">
          <div className="container py-4 space-y-2">
            {NAV.map(item=>(
              <div key={item.label}>
                {item.submenu ? (
                  <details className="group">
                    <summary className="list-none cursor-pointer px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 flex items-center justify-between">
                      {item.label} <ChevronDown className="w-4 h-4"/>
                    </summary>
                    <div className="pl-2">
                      {item.submenu.map(s=>(
                        <Link key={s.href} href={s.href} className="block px-4 py-2 text-white/75 hover:text-[#00FFC8]">{s.label}</Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href!} className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10">{item.label}</Link>
                )}
              </div>
            ))}
            <div className="pt-3 flex gap-2">
              <Link href="/login" className="btn-oqd-secondary flex-1 text-center">Login</Link>
              <Link href="/berater" className="btn-oqd-primary flex-1 text-center">Beraten lassen</Link>
            </div>
            <div className="pt-2"><LanguageSwitcher /></div>
          </div>
        </div>
      )}
    </header>
  );
}
