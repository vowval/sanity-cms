import { PreviewSuspense } from '@sanity/preview-kit'
import { BlogPage } from 'components/pages/blog/BlogPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getBlogBySlug,
  getBlogPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { BlogPayload, SettingsPayload } from 'types'

const BlogPreview = lazy(
  () => import('components/pages/blog/BlogPreview')
)

interface PageProps {
  blog?: BlogPayload
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

export default function BlogSlugRoute(props: PageProps) {
  const { homePageTitle, settings, blog, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <BlogPage
              homePageTitle={homePageTitle}
              blog={blog}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <BlogPreview
          token={token}
          blog={blog}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <BlogPage
      homePageTitle={homePageTitle}
      blog={blog}
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

  const [settings, blog, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getBlogBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!blog) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blog,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getBlogPaths()

  return {
    paths: paths?.map((slug) => resolveHref('blog', slug)) || [],
    fallback: false,
  }
}
