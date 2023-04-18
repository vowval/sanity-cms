import { PreviewSuspense } from '@sanity/preview-kit'
import { HerosectionPage } from 'components/pages/herosection/HerosectionPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getHerosectionBySlug,
  getHerosectionPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { HerosectionPayload, SettingsPayload } from 'types'

const HerosectionPreview = lazy(
  () => import('components/pages/herosection/HerosectionPreview')
)

interface PageProps {
  herosection?: HerosectionPayload
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

export default function HerosectionSlugRoute(props: PageProps) {
  const { homePageTitle, settings, herosection, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <HerosectionPage
              homePageTitle={homePageTitle}
              herosection={herosection}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <HerosectionPreview
          token={token}
          herosection={herosection}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <HerosectionPage
      homePageTitle={homePageTitle}
      herosection={herosection}
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

  const [settings, herosection, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getHerosectionBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!herosection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      herosection,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getHerosectionPaths()

  return {
    paths: paths?.map((slug) => resolveHref('herosection', slug)) || [],
    fallback: false,
  }
}
