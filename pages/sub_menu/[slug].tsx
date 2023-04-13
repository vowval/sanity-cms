import { PreviewSuspense } from '@sanity/preview-kit'
import { Sub_menuPage } from 'components/pages/sub_menu/Sub_menuPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getSub_menuBySlug,
  getSub_menuPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { Sub_menuPayload, SettingsPayload } from 'types'

const Sub_menuPreview = lazy(
  () => import('components/pages/sub_menu/Sub_menuPreview')
)

interface PageProps {
  sub_menu?: Sub_menuPayload
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

export default function Sub_menuSlugRoute(props: PageProps) {
  const { homePageTitle, settings, sub_menu, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <Sub_menuPage
              homePageTitle={homePageTitle}
              sub_menu={sub_menu}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <Sub_menuPreview
          token={token}
          sub_menu={sub_menu}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <Sub_menuPage
      homePageTitle={homePageTitle}
      sub_menu={sub_menu}
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

  const [settings, sub_menu, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getSub_menuBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!sub_menu) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      sub_menu,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getSub_menuPaths()

  return {
    paths: paths?.map((slug) => resolveHref('sub_menu', slug)) || [],
    fallback: false,
  }
}
