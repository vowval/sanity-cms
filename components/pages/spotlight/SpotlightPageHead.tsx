import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { SpotlightPayload } from 'types'

export interface SpotlightPageHeadProps {
  spotlight: SpotlightPayload | undefined
  title: string | undefined
}

export default function SpotlightPageHead({
  spotlight,
  title,
}: SpotlightPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={spotlight?.overview ? toPlainText(spotlight.overview) : ''}
      image={spotlight?.coverImage}
      title={spotlight?.title}
    />
  )
}
