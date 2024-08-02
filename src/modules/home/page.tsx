import type { Metadata } from 'next'

import type { WebPage } from '@/shared/types'
import { getTranslations } from 'next-intl/server'

export const rootMetadata = {} satisfies Metadata

// DISABLE CACHING FOR THIS ROUTE SEGMENT
export const dynamic = 'force-dynamic'

export const HomePage: WebPage = async ({ params }) => {
  const t = await getTranslations()

  return <main>{t("test")}</main>
}