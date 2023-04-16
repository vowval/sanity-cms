import { PreviewSuspense } from '@sanity/preview-kit'
import { TestimonialPage } from 'components/pages/testimonial/TestimonialPage'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import {
  getHomePageTitle,
  getTestimonialBySlug,
  getTestimonialPaths,
  getSettings,
} from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { TestimonialPayload, SettingsPayload } from 'types'

const TestimonialPreview = lazy(
  () => import('components/pages/testimonial/TestimonialPreview')
)

interface PageProps {
  testimonial?: TestimonialPayload
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

export default function TestimonialSlugRoute(props: PageProps) {
  const { homePageTitle, settings, testimonial, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <PreviewWrapper>
            <TestimonialPage
              homePageTitle={homePageTitle}
              testimonial={testimonial}
              settings={settings}
              preview={preview}
            />
          </PreviewWrapper>
        }
      >
        <TestimonialPreview
          token={token}
          testimonial={testimonial}
          settings={settings}
          homePageTitle={homePageTitle}
        />
      </PreviewSuspense>
    )
  }

  return (
    <TestimonialPage
      homePageTitle={homePageTitle}
      testimonial={testimonial}
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

  const [settings, testimonial, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getTestimonialBySlug({ token, slug: params.slug }),
    getHomePageTitle({ token }),
  ])

  if (!testimonial) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      testimonial,
      settings,
      homePageTitle,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getTestimonialPaths()

  return {
    paths: paths?.map((slug) => resolveHref('testimonial', slug)) || [],
    fallback: false,
  }
}
