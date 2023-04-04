import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { LayoutcsPayload } from 'types'

export interface LayoutcsPageHeadProps {
  layoutcs: LayoutcsPayload | undefined
  title: string | undefined
}

export default function LayoutcsPageHead({
  layoutcs,
  title,
}: LayoutcsPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={layoutcs?.overview ? toPlainText(layoutcs.overview) : ''}
      image={layoutcs?.coverImage}
      title={layoutcs?.title}
    />
  )
}
