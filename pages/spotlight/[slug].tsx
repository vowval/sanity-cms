import { PreviewSuspense } from '@sanity/preview-kit'
import { SpotlightPage } from 'components/pages/spotlight/SpotlightPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getSpotlightBySlug,
  getSpotlightPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { SpotlightPayload, SettingsPayload } from 'types'

const SpotlightPreview = lazy(
  () => import('components/pages/spotlight/SpotlightPreview')
)

interface PageProps {
  spotlight?: SpotlightPayload
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

export default function SpotlightSlugRoute(props: PageProps) {
  const { homePageTitle, settings, spotlight, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <SpotlightPage
              homePageTitle={homePageTitle}
              spotlight={spotlight}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <SpotlightPreview
          token={token}
          spotlight={spotlight}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <SpotlightPage
      homePageTitle={homePageTitle}
      spotlight={spotlight}
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

  const [settings, spotlight, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getSpotlightBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!spotlight) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      spotlight,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getSpotlightPaths()

  return {
    paths: paths?.map((slug) => resolveHref('spotlight', slug)) || [],
    fallback: false,
  }
}
