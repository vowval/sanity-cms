import { usePreview } from 'lib/sanity.preview'
import { footersectionBySlugQuery } from 'lib/sanity.queries'
import type { FootersectionPayload } from 'types'

import { FootersectionPage, FootersectionPageProps } from './FootersectionPage'

export default function FootersectionPreview({
  token,
  settings,
  footersection,
  homePageTitle,
}: {
  token: null | string
} & FootersectionPageProps) {
  const footersectionPreview: FootersectionPayload = usePreview(token, footersectionBySlugQuery, {
    slug: footersection?.slug,
  })
  //console.log("footersectionPreview",footersectionPreview)
  return (
    <FootersectionPage
      footersection={footersectionPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
