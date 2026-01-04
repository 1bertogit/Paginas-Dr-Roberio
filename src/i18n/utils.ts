import { translations, defaultLang, type Language, type TranslationKey } from './translations';

/**
 * Get the current language from URL or default
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Language;
  }
  return defaultLang;
}

/**
 * Get translation function for a specific language
 */
export function useTranslations(lang: Language = defaultLang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

/**
 * Get translated URL for language switching
 */
export function getTranslatedPath(currentPath: string, targetLang: Language): string {
  const pathParts = currentPath.split('/').filter(Boolean);

  // Check if first part is a language code
  if (pathParts[0] in translations) {
    pathParts.shift();
  }

  // For default language, don't add prefix
  if (targetLang === defaultLang) {
    return '/' + pathParts.join('/');
  }

  return '/' + targetLang + '/' + pathParts.join('/');
}

/**
 * Get all translation keys for a namespace
 */
export function getNamespaceTranslations(lang: Language, namespace: string) {
  const t = useTranslations(lang);
  const keys = Object.keys(translations[lang]) as TranslationKey[];

  return keys
    .filter(key => key.startsWith(namespace + '.'))
    .reduce((acc, key) => {
      const shortKey = key.replace(namespace + '.', '');
      acc[shortKey] = t(key);
      return acc;
    }, {} as Record<string, string>);
}
