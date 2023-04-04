import { PreviewSuspense } from '@sanity/preview-kit'
import { RecentPage } from 'components/pages/recent/RecentPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getRecentBySlug,
  getRecentPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { RecentPayload, SettingsPayload } from 'types'

const RecentPreview = lazy(
  () => import('components/pages/recent/RecentPreview')
)

interface PageProps {
  recent?: RecentPayload
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

export default function RecentSlugRoute(props: PageProps) {
  const { homePageTitle, settings, recent, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <RecentPage
              homePageTitle={homePageTitle}
              recent={recent}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <RecentPreview
          token={token}
          recent={recent}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <RecentPage
      homePageTitle={homePageTitle}
      recent={recent}
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

  const [settings, recent, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getRecentBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!recent) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      recent,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getRecentPaths()

  return {
    paths: paths?.map((slug) => resolveHref('recent', slug)) || [],
    fallback: false,
  }
}
