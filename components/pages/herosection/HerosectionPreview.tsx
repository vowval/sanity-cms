import { usePreview } from 'lib/sanity.preview'
import { herosectionBySlugQuery } from 'lib/sanity.queries'
import type { HerosectionPayload } from 'types'

import { HerosectionPage, HerosectionPageProps } from './HerosectionPage'

export default function HerosectionPreview({
  token,
  settings,
  herosection,
  homePageTitle,
}: {
  token: null | string
} & HerosectionPageProps) {
  const herosectionPreview: HerosectionPayload = usePreview(token, herosectionBySlugQuery, {
    slug: herosection?.slug,
  })

  return (
    <HerosectionPage
      herosection={herosectionPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
