import { usePreview } from 'lib/sanity.preview'
import { recommendBySlugQuery } from 'lib/sanity.queries'
import type { RecommendPayload } from 'types'

import { RecommendPage, RecommendPageProps } from './RecommendPage'

export default function RecommendPreview({
  token,
  settings,
  recommend,
  homePageTitle,
}: {
  token: null | string
} & RecommendPageProps) {
  const recommendPreview: RecommendPayload = usePreview(token, recommendBySlugQuery, {
    slug: recommend?.slug,
  })

  return (
    <RecommendPage
      recommend={recommendPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
