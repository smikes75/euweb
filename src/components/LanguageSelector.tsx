import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FLAG_COMPONENTS, type LanguageKey } from './FlagComponents';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!i18n.language || !Object.keys(FLAG_COMPONENTS).includes(i18n.language)) {
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

  const CurrentFlag = FLAG_COMPONENTS[i18n.language as LanguageKey] || FLAG_COMPONENTS.en;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors mt-2"
        aria-label="Vybrat jazyk"
      >
        <div className="w-6">
          <CurrentFlag className="h-6 w-auto" />
        </div>
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-1/2 translate-x-1/2 mt-1 bg-white bg-opacity-90 rounded-md shadow-lg z-50 w-12 overflow-hidden py-1"
        >
          <div className="flex flex-col items-center">
{(Object.entries(FLAG_COMPONENTS) as [LanguageKey, React.FC<FlagProps>][]).map(([lang, FlagComponent]) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className="w-full hover:bg-gray-100 py-2 flex justify-center"
              >
                <div className="w-6">
                  <FlagComponent className="h-6 w-auto" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}