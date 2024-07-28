import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import type { Locale } from '@/shared/types'

import { i18nConfig } from './config'

const defaultNS = 'common'

const getOptions = (lng: Locale = i18nConfig.defaultLocale, ns: string[] | string = defaultNS) => ({
  supportedLngs: i18nConfig.locales,
  fallbackLng: i18nConfig.defaultLocale,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
})

const initI18next = async (lng: Locale, ns: string[] | string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: Locale, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

type UseTranslationOptions = { keyPrefix?: string }
export async function useTranslation(lng: Locale, ns: string[] | string, options?: UseTranslationOptions) {
  const i18nextInstance = await initI18next(lng, ns)
  const nameSpace = Array.isArray(ns) ? ns[0] : ns
  return {
    t: i18nextInstance.getFixedT(lng, nameSpace, options?.keyPrefix),
    i18n: i18nextInstance,
  }
}