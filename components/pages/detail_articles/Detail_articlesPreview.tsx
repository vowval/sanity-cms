import { usePreview } from 'lib/sanity.preview'
import { detail_articlesBySlugQuery } from 'lib/sanity.queries'
import type { Detail_articlesPayload } from 'types'

import { Detail_articlesPage, Detail_articlesPageProps } from './Detail_articlesPage'

export default function Detail_articlesPreview({
  token,
  settings,
  detail_articles,
  homePageTitle,
}: {
  token: null | string
} & Detail_articlesPageProps) {
  const detail_articlesPreview: Detail_articlesPayload = usePreview(token, detail_articlesBySlugQuery, {
    slug: detail_articles?.slug,
  })

  return (
    <Detail_articlesPage
      detail_articles={detail_articlesPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
