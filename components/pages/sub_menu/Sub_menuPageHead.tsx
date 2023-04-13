import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { Sub_menuPayload } from 'types'

export interface Sub_menuPageHeadProps {
  sub_menu: Sub_menuPayload | undefined
  title: string | undefined
}

export default function Sub_menuPageHead({
  sub_menu,
  title,
}: Sub_menuPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      title={sub_menu?.title}
    />
  )
}
