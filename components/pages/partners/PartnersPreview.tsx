import { usePreview } from 'lib/sanity.preview'
import { partnersBySlugQuery } from 'lib/sanity.queries'
import type { PartnersPayload } from 'types'

import { PartnersPage, PartnersPageProps } from './PartnersPage'

export default function PartnersPreview({
  token,
  settings,
  partners,
  homePageTitle,
}: {
  token: null | string
} & PartnersPageProps) {
  const partnersPreview: PartnersPayload = usePreview(token, partnersBySlugQuery, {
    slug: partners?.slug,
  })

  return (
    <PartnersPage
      partners={partnersPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
