import logoUrl from '../assets/lex-insight-logo.png';
import { TRANSLATIONS } from '../data';
import { Language } from '../types';

interface LogoProps {
  language: Language;
  /** 'light' renders the lockup in white for dark backgrounds; 'color' keeps the brand gold/bronze. */
  variant?: 'light' | 'color';
  /** Tailwind height class for the mark, e.g. "h-12". */
  heightClass?: string;
  className?: string;
}

export default function Logo({
  language,
  variant = 'light',
  heightClass = 'h-12',
  className = ''
}: LogoProps) {
  const t = TRANSLATIONS[language];
  return (
    <img
      src={logoUrl}
      alt={t.firmName}
      // brightness(0) invert(1) flattens the colored lockup to clean white for dark surfaces.
      className={`${heightClass} w-auto object-contain ${variant === 'light' ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
}
