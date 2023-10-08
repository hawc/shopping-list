import { translations } from '../static/translations';

export function translate(key: string, locale: 'de' | 'en' = 'de') {
  return translations[key]?.[locale] ?? key;
}