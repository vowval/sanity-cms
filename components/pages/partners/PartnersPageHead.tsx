import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { PartnersPayload } from 'types'

export interface PartnersPageHeadProps {
  partners: PartnersPayload | undefined
  title: string | undefined
}

export default function PartnersPageHead({
  partners,
  title,
}: PartnersPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      image={partners?.coverImage}
      title={partners?.title}
    />
  )
}
