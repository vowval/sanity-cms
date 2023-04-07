import { PreviewSuspense } from '@sanity/preview-kit'
import { Detail_articlesPage } from 'components/pages/detail_articles/Detail_articlesPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getDetail_articlesBySlug,
  getDetail_articlesPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { Detail_articlesPayload, SettingsPayload } from 'types'

const Detail_articlesPreview = lazy(
  () => import('components/pages/detail_articles/Detail_articlesPreview')
)

interface PageProps {
  detail_articles?: Detail_articlesPayload
  settings?: SettingsPayload
  homePageTitle?: string
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Detail_articlesSlugRoute(props: PageProps) {
  const { homePageTitle, settings, detail_articles, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Detail_articlesPage
              homePageTitle={homePageTitle}
              detail_articles={detail_articles}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <Detail_articlesPreview
          token={token}
          detail_articles={detail_articles}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <Detail_articlesPage
      homePageTitle={homePageTitle}
      detail_articles={detail_articles}
      settings={settings}
      preview={preview}
    />
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, detail_articles, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getDetail_articlesBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!detail_articles) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      detail_articles,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getDetail_articlesPaths()

  return {
    paths: paths?.map((slug) => resolveHref('detail_articles', slug)) || [],
    fallback: false,
  }
}
