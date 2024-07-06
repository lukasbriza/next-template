
import { createInstance, i18n, Resource } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from 'react-i18next/initReactI18next'
import { i18nConfig } from "./config";

const defaultNS = "common"

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

const getOptions = (lng = i18nConfig.defaultLocale, ns = defaultNS) => {
  return {
    supportedLngs: i18nConfig.locales,
    fallbackLng: i18nConfig.defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

type UseTranslationOptions = { keyPrefix?: string }
export async function useTranslation(lng, ns, options?: UseTranslationOptions) {
  const i18nextInstance = (await initI18next(lng, ns))
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
    i18n: i18nextInstance
  }
}
