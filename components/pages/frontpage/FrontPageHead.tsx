import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { FrontPagePayload, SettingsPayload } from 'types'

export interface FrontPageHeadProps {
  settings?: SettingsPayload
  page?: FrontPagePayload
}

export default function FrontPageHead({ settings, page }: FrontPageHeadProps) {
  return (
    <SiteMeta
      description={page?.overview ? toPlainText(page.overview) : ''}
      image={settings?.ogImage}
      title={page?.title}
    />
  )
}
