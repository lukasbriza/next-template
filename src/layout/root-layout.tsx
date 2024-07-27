import { PublicEnvScript } from 'next-runtime-env'
import { i18nConfig } from "@/i18n/config"
import { AsyncWebLayout } from "@/shared/types"
import { dir } from "i18next"
import { RootWebLayout } from "./web-layout"

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export const RootLayout: AsyncWebLayout = async ({ children, params }) => (
  <html lang={params.locale} dir={dir(params.locale)}>
    <head>
      <PublicEnvScript />
      <meta key="robots" content={process.env.NEXT_PUBLIC_META_ROBOTS} name="robots" />
    </head>
    <body>
      <RootWebLayout params={params}>
        {children}
      </RootWebLayout>
    </body>
  </html>
)
