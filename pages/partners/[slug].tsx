import { PreviewSuspense } from '@sanity/preview-kit'
import { PartnersPage } from 'components/pages/partners/PartnersPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getPartnersBySlug,
  getPartnersPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { PartnersPayload, SettingsPayload } from 'types'

const PartnersPreview = lazy(
  () => import('components/pages/partners/PartnersPreview')
)

interface PageProps {
  partners?: PartnersPayload
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

export default function PartnersSlugRoute(props: PageProps) {
  const { homePageTitle, settings, partners, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <PartnersPage
              homePageTitle={homePageTitle}
              partners={partners}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <PartnersPreview
          token={token}
          partners={partners}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <PartnersPage
      homePageTitle={homePageTitle}
      partners={partners}
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

  const [settings, partners, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getPartnersBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!partners) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      partners,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getPartnersPaths()

  return {
    paths: paths?.map((slug) => resolveHref('partners', slug)) || [],
    fallback: false,
  }
}
