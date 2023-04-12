import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { Detail_articlesPayload } from 'types'

export interface Detail_articlesPageHeadProps {
  detail_articles: Detail_articlesPayload | undefined
  title: string | undefined
}

export default function Detail_articlesPageHead({
  detail_articles,
  title,
}: Detail_articlesPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={detail_articles?.overview ? toPlainText(detail_articles.overview) : ''}
      image={detail_articles?.coverImage}
      title={detail_articles?.title}
      galleryImages={detail_articles.galleryImages}
    />
  )
}
