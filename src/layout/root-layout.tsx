import Head from 'next/head'
import { PublicEnvScript } from 'next-runtime-env'

import { i18nConfig } from '@/i18n/config'
import type { AsyncWebLayout } from '@/shared/types'

import { RootWebLayout } from './web-layout'
import { notFound } from 'next/navigation'

export const RootLayout: AsyncWebLayout = async ({ children, params }) => {
  if (!i18nConfig.locales.includes(params.locale)) {
    notFound()
  }

  return (
    <html lang={params.locale || i18nConfig.defaultLocale}>
      <Head>
        <PublicEnvScript />
        <meta key="robots" content={process.env.NEXT_PUBLIC_META_ROBOTS} name="robots" />
      </Head>
      <body>
        <RootWebLayout params={params}>{children}</RootWebLayout>
      </body>
    </html>
  )
}
