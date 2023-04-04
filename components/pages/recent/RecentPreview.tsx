import { usePreview } from 'lib/sanity.preview'
import { recentBySlugQuery } from 'lib/sanity.queries'
import type { RecentPayload } from 'types'

import { RecentPage, RecentPageProps } from './RecentPage'

export default function RecentPreview({
  token,
  settings,
  recent,
  homePageTitle,
}: {
  token: null | string
} & RecentPageProps) {
  const recentPreview: RecentPayload = usePreview(token, recentBySlugQuery, {
    slug: recent?.slug,
  })

  return (
    <RecentPage
      recent={recentPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
