import { usePreview } from 'lib/sanity.preview'
import { layoutcsBySlugQuery } from 'lib/sanity.queries'
import type { LayoutcsPayload } from 'types'

import { LayoutcsPage, LayoutcsPageProps } from './LayoutcsPage'

export default function LayoutcsPreview({
  token,
  settings,
  layoutcs,
  homePageTitle,
}: {
  token: null | string
} & LayoutcsPageProps) {
  const layoutcsPreview: LayoutcsPayload = usePreview(token, layoutcsBySlugQuery, {
    slug: layoutcs?.slug,
  })
  //console.log("layoutcsPreview",layoutcsPreview)
  return (
    <LayoutcsPage
      layoutcs={layoutcsPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
