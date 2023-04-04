import { PreviewSuspense } from '@sanity/preview-kit'
import { RecommendPage } from 'components/pages/recommend/RecommendPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getRecommendBySlug,
  getRecommendPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { RecommendPayload, SettingsPayload } from 'types'

const RecommendPreview = lazy(
  () => import('components/pages/recommend/RecommendPreview')
)

interface PageProps {
  recommend?: RecommendPayload
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

export default function RecommendSlugRoute(props: PageProps) {
  const { homePageTitle, settings, recommend, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <RecommendPage
              homePageTitle={homePageTitle}
              recommend={recommend}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <RecommendPreview
          token={token}
          recommend={recommend}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <RecommendPage
      homePageTitle={homePageTitle}
      recommend={recommend}
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

  const [settings, recommend, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getRecommendBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!recommend) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      recommend,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getRecommendPaths()

  return {
    paths: paths?.map((slug) => resolveHref('recommend', slug)) || [],
    fallback: false,
  }
}
