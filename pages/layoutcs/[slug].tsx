import { PreviewSuspense } from '@sanity/preview-kit'
import { LayoutcsPage } from 'components/pages/layoutcs/LayoutcsPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getLayoutcsBySlug,
  getLayoutcsPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { LayoutcsPayload, SettingsPayload } from 'types'

const LayoutcsPreview = lazy(
  () => import('components/pages/layoutcs/LayoutcsPreview')
)

interface PageProps {
  layoutcs?: LayoutcsPayload
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

export default function LayoutcsSlugRoute(props: PageProps) {
  const { homePageTitle, settings, layoutcs, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <LayoutcsPage
              homePageTitle={homePageTitle}
              layoutcs={layoutcs}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <LayoutcsPreview
          token={token}
          layoutcs={layoutcs}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <LayoutcsPage
      homePageTitle={homePageTitle}
      layoutcs={layoutcs}
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

  const [settings, layoutcs, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getLayoutcsBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!layoutcs) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      layoutcs,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getLayoutcsPaths()

  return {
    paths: paths?.map((slug) => resolveHref('layoutcs', slug)) || [],
    fallback: false,
  }
}
