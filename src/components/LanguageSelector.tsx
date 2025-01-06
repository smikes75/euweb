import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Lokální vlajky
const FLAGS = {
  cs: "/flags/cs.svg",
  de: "/flags/de.svg",
  en: "/flags/en.svg",
  // it: "/flags/it.svg"
} as const;

type LanguageKey = keyof typeof FLAGS;

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Nastavení výchozího jazyka, pokud není nastaven
  useEffect(() => {
    if (!i18n.language || !Object.keys(FLAGS).includes(i18n.language)) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  // Zavření dropdownu při kliknutí mimo
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
      {/* Tlačítko s aktuální vlajkou */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Vybrat jazyk"
      >
        <img
          src={currentFlag}
          alt={i18n.language}
          className="h-5 w-auto"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 bg-white rounded-md shadow-lg py-1 z-50">
          {Object.entries(FLAGS).map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang as LanguageKey)}
              className="w-full flex items-center px-4 py-2 hover:bg-gray-100"
            >
              <img
                src={flag}
                alt={lang}
                className="h-6 w-auto"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
