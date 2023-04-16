import { usePreview } from 'lib/sanity.preview'
import { spotlightBySlugQuery } from 'lib/sanity.queries'
import type { SpotlightPayload } from 'types'

import { SpotlightPage, SpotlightPageProps } from './SpotlightPage'

export default function SpotlightPreview({
  token,
  settings,
  spotlight,
  homePageTitle,
}: {
  token: null | string
} & SpotlightPageProps) {
  const spotlightPreview: SpotlightPayload = usePreview(token, spotlightBySlugQuery, {
    slug: spotlight?.slug,
  })
  //console.log("spotlightPreview",spotlightPreview)
  return (
    <SpotlightPage
      spotlight={spotlightPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
