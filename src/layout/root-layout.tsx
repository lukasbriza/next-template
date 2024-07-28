import { dir } from 'i18next'
import Head from 'next/head'
import { PublicEnvScript } from 'next-runtime-env'

import { i18nConfig } from '@/i18n/config'
import type { AsyncWebLayout } from '@/shared/types'

import { RootWebLayout } from './web-layout'

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export const RootLayout: AsyncWebLayout = ({ children, params }) => (
  <html dir={dir(params.locale)} lang={params.locale}>
    <Head>
      <PublicEnvScript />
      <meta key="robots" content={process.env.NEXT_PUBLIC_META_ROBOTS} name="robots" />
    </Head>
    <body>
      <RootWebLayout params={params}>{children}</RootWebLayout>
    </body>
  </html>
)
