import { usePreview } from 'lib/sanity.preview'
import { testimonialBySlugQuery } from 'lib/sanity.queries'
import type { TestimonialPayload } from 'types'

import { TestimonialPage, TestimonialPageProps } from './TestimonialPage'

export default function TestimonialPreview({
  token,
  settings,
  testimonial,
  homePageTitle,
}: {
  token: null | string
} & TestimonialPageProps) {
  const testimonialPreview: TestimonialPayload = usePreview(token, testimonialBySlugQuery, {
    slug: testimonial?.slug,
  })
  //console.log("testimonialPreview",testimonialPreview)
  return (
    <TestimonialPage
      testimonial={testimonialPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
