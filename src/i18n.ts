import en from './i18n/en.json'
import de from './i18n/de.json'
import fr from './i18n/fr.json'
import es from './i18n/es.json'
import nl from './i18n/nl.json'
import ru from './i18n/ru.json'
import pt from './i18n/pt.json'
import { createI18n } from 'vue-i18n'

export let i18n: any

export const getI18n = (messages: any, lang: string) => {
  i18n = createI18n({
    locale: navigator.language.substring(0, 2),
    fallbackLocale: 'en',
    messages: {
      en: { ...en, ...messages.en },
      de: { ...de, ...messages.de },
      fr: { ...fr, ...messages.fr },
      es: { ...es, ...messages.es },
      nl: { ...nl, ...messages.nl },
      ru: { ...ru, ...messages.ru },
      pt: { ...pt, ...messages.pt },
    },
  })
  i18n.global.locale = lang
  return LANG_2_TO_3_MAPPER[lang]
}

export const t = (msg?: string) => {
  return i18n?.global.t(msg)
}

export const LANG_2_TO_3_MAPPER: { [index: string]: any } = {
  en: 'eng',
  nl: 'dut',
  fr: 'fre',
  de: 'ger',
  ko: 'kor',
  es: 'spa',
  cs: 'cze',
  ca: 'cat',
  fi: 'fin',
  is: 'ice',
  it: 'ita',
  pt: 'por',
  ru: 'rus',
  zh: 'chi',
  sk: 'slo',
}
