import { useTranslation } from "@/i18n/i18n"
import { WebPage } from "@/shared/types"
import { Metadata } from "next"

export const rootMetadata = {

} satisfies Metadata

//DISABLE CACHING FOR THIS ROUTE SEGMENT
export const dynamic = 'force-dynamic';

export const HomePage: WebPage = async ({ params: { locale } }) => {
  const { t } = await useTranslation(locale, "home")
  return (
    <main>{t("message")}</main>
  )
}