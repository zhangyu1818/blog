import { languages, defaultLanguage, ui } from '@i18n/languages'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in languages) return lang as keyof typeof languages
  return defaultLanguage
}

export function normalizeUrl(url: string) {
  if (url.endsWith('/')) return url
  return `${url}/`
}

export function langPrefix(lang: string) {
  function prefix(url: string) {
    const to = lang === defaultLanguage ? url : `/${lang}${url}`
    return normalizeUrl(to)
  }

  // TODO
  function remove(url: string) {}

  return [prefix, remove] as const
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLanguage]) {
    return ui[lang][key] || ui[defaultLanguage][key]
  }
}
