import { i18nConfig } from "@/i18n/config";
import { AsyncWebLayout } from "@/shared/types"
import { dir } from "i18next"

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export const RootLayout: AsyncWebLayout = async ({ children, params: { locale } }) => (
  <html lang={locale} dir={dir(locale)}>
    <head>
      <meta key="robots" content={process.env.NEXT_PUBLIC_META_ROBOTS} name="robots" />
    </head>
    <body>
      {children}
    </body>
  </html>
)
