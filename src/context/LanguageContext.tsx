'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '@/data/translations.json';

export type Language = 'vi' | 'en' | 'cn';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('vi');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['vi', 'en', 'cn'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (section: string, key: string): string => {
    const sec = (translationsData as any)[section];
    if (!sec) return `${section}.${key}`;
    const item = sec[key];
    if (!item) return `${section}.${key}`;
    return item[language] || item['vi'] || `${section}.${key}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
