type LocalizedEntry = {
  __i18n_lang?: string;
};

export function getLocalizedEntry<T extends LocalizedEntry>(
  entries: T[],
  locale: string | undefined,
  fallbackLocale = "en"
): T | undefined {
  if (entries.length === 0) {
    return undefined;
  }

  if (locale) {
    const localeMatch = entries.find((entry) => entry.__i18n_lang === locale);
    if (localeMatch) {
      return localeMatch;
    }
  }

  const fallbackMatch = entries.find(
    (entry) => entry.__i18n_lang === fallbackLocale
  );
  if (fallbackMatch) {
    return fallbackMatch;
  }

  return entries[0];
}
