import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { HerosectionPayload } from 'types'

export interface HerosectionPageHeadProps {
  herosection: HerosectionPayload | undefined
  title: string | undefined
}

export default function HerosectionPageHead({
  herosection,
  title,
}: HerosectionPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      title={herosection?.title}
    />
  )
}
