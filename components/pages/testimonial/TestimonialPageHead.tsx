import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { TestimonialPayload } from 'types'

export interface TestimonialPageHeadProps {
  testimonial: TestimonialPayload | undefined
  title: string | undefined
}

export default function TestimonialPageHead({
  testimonial,
  title,
}: TestimonialPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      image={testimonial?.coverImage}
      title={testimonial?.title}
    />
  )
}
