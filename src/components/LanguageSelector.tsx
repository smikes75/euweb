import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FLAGS = {
  cs: "🇨🇿",
  de: "🇩🇪",
  en: "🇬🇧",
  it: "🇮🇹" 
} as const;

type LanguageKey = keyof typeof FLAGS;

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set default language to Czech if not already set
  useEffect(() => {
    if (!i18n.language || !Object.keys(FLAGS).includes(i18n.language)) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: LanguageKey) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentFlag = FLAGS[i18n.language as LanguageKey] || FLAGS.cs;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Vybrat jazyk"
      >
        <span className="text-2xl">{currentFlag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-50">
          {Object.entries(FLAGS).map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang as LanguageKey)}
              className={`w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 ${
                i18n.language === lang ? 'bg-primary/10' : ''
              }`}
            >
              <span className="text-2xl">{flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}