import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { RecommendPayload } from 'types'

export interface RecommendPageHeadProps {
  recommend: RecommendPayload | undefined
  title: string | undefined
}

export default function RecommendPageHead({
  recommend,
  title,
}: RecommendPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={recommend?.overview ? toPlainText(recommend.overview) : ''}
      image={recommend?.coverImage}
      title={recommend?.title}
    />
  )
}
