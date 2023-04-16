import { PreviewSuspense } from '@sanity/preview-kit'
import { FootersectionPage } from 'components/pages/footersection/FootersectionPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getFootersectionBySlug,
  getFootersectionPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { FootersectionPayload, SettingsPayload } from 'types'

const FootersectionPreview = lazy(
  () => import('components/pages/footersection/FootersectionPreview')
)

interface PageProps {
  footersection?: FootersectionPayload
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

export default function FootersectionSlugRoute(props: PageProps) {
  const { homePageTitle, settings, footersection, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <FootersectionPage
              homePageTitle={homePageTitle}
              footersection={footersection}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <FootersectionPreview
          token={token}
          footersection={footersection}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <FootersectionPage
      homePageTitle={homePageTitle}
      footersection={footersection}
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

  const [settings, footersection, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getFootersectionBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!footersection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      footersection,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getFootersectionPaths()

  return {
    paths: paths?.map((slug) => resolveHref('footersection', slug)) || [],
    fallback: false,
  }
}
