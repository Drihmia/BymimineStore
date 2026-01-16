'use client';

import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const defaultLanguage: Language = 'fr';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('bymimini_lang') as Language;
    if (storedLanguage && ['en', 'fr', 'ar'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if(typeof window !== 'undefined') {
        localStorage.setItem('bymimini_lang', lang);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const fetchTranslations = async () => {
      try {
        const module = await import(`@/locales/${language}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Could not load translations for ${language}`, error);
        // Fallback to default language if current one fails
        const module = await import(`@/locales/${defaultLanguage}.json`);
        setTranslations(module.default);
      }
    };

    fetchTranslations();

    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, isMounted]);

  if (!isMounted || !translations) {
     return null; // or a loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
