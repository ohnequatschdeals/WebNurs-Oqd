'use client';
import React,{createContext,useContext,useMemo} from 'react';
import { create } from 'zustand';
import en from './messages/en.json';
import de from './messages/de.json';
import tr from './messages/tr.json';

type Locale='en'|'de'|'tr';
type Dict=Record<string,string>;
const dicts:Record<Locale,Dict>={en,de,tr};

type Store={ locale:Locale; setLocale:(l:Locale)=>void; };
export const useI18nStore=create<Store>((set)=>({
  locale:(typeof window!=='undefined' && (localStorage.getItem('locale') as Locale)) || 'de',
  setLocale:(l)=>{ if(typeof window!=='undefined'){ localStorage.setItem('locale',l);} set({locale:l}); }
}));

const Ctx = createContext<{ t:(k:string)=>string; locale:Locale }>({ t:(k)=>k, locale:'de' });
export const useI18n = () => useContext(Ctx);

export default function I18nProvider({children}:{children:React.ReactNode}){
  const { locale } = useI18nStore();
  const d = dicts[locale] ?? dicts.de;
  const value = useMemo(()=>({ t:(k:string)=>d[k] ?? k, locale }),[d, locale]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
