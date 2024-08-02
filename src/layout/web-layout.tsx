import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import type { AsyncWebLayout } from '@/shared/types'

import { EmotionRegistry } from './registry'

export const RootWebLayout: AsyncWebLayout = async ({ children }) => {
  const messages = await getMessages()
  return (
    <EmotionRegistry>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </EmotionRegistry>
  )
}