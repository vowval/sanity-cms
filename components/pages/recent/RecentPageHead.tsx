import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { RecentPayload } from 'types'

export interface RecentPageHeadProps {
  recent: RecentPayload | undefined
  title: string | undefined
}

export default function RecentPageHead({
  recent,
  title,
}: RecentPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={recent?.overview ? toPlainText(recent.overview) : ''}
      image={recent?.coverImage}
      title={recent?.title}
    />
  )
}
