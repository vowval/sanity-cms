import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { FootersectionPayload } from 'types'

export interface FootersectionPageHeadProps {
  footersection: FootersectionPayload | undefined
  title: string | undefined
}

export default function FootersectionPageHead({
  footersection,
  title,
}: FootersectionPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      title={footersection?.title}
    />
  )
}
