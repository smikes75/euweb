import React from 'react';

interface FlagProps {
  className?: string;
}

export const CzechFlag: React.FC<FlagProps> = ({ className = "h-5 w-auto" }) => (
  <svg 
    viewBox="0 0 900 600" 
    className={className}
    aria-label="Czech flag"
  >
  <path fill="#fff" d="M0 0h640v240H0z"/>
  <path fill="#d7141a" d="M0 240h640v240H0z"/>
  <path fill="#11457e" d="M360 240 0 0v480z"/>
</svg>

);

export const GermanFlag: React.FC<FlagProps> = ({ className = "h-5 w-auto" }) => (
  <svg 
    viewBox="0 0 900 600" 
    className={className}
    aria-label="German flag"
  >
  <path fill="#fc0" d="M0 320h640v160H0z"/>
  <path fill="#000001" d="M0 0h640v160H0z"/>
  <path fill="red" d="M0 160h640v160H0z"/>
</svg>
);

export const BritishFlag: React.FC<FlagProps> = ({ className = "h-5 w-auto" }) => (
  <svg 
    viewBox="0 0 900 600" 
    className={className}
    aria-label="British flag"
  >
  <path fill="#012169" d="M0 0h640v480H0z"/>
  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
  <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
  <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
  <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
  </svg>
);

// Objekt mapující kódy jazyků na komponenty vlajek
export const FLAG_COMPONENTS = {
  cs: CzechFlag,
  de: GermanFlag,
  en: BritishFlag,
} as const;

export type LanguageKey = keyof typeof FLAG_COMPONENTS;