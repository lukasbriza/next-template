import type { NextPage } from 'next'
import type { PropsWithChildren, ReactNode } from 'react'

import type { Locale } from '@/i18n/config'

/**
 * Locale const translated to type
 */
export type Locale = (typeof Locale)[keyof typeof Locale]

/**
 * Root parameters for all pages
 */
export type WebPageParams = {
  locale: Locale
}

/**
 * Root props for all pages
 */
export type WebPageProps<T extends WebPageParams = WebPageParams> = {
  params: T
}

/**
 * Async layout type.
 */
export type AsyncWebLayout = (props: PropsWithChildren<WebPageProps>) => ReactNode

/**
 * Page type
 */
export type WebPage<T extends WebPageProps = WebPageProps, I = T> = NextPage<T, I>
