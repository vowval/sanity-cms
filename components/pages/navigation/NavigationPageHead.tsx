import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { NavigationPayload } from 'types'

export interface NavigationPageHeadProps {
  navigation: NavigationPayload | undefined
  title: string | undefined
}

export default function NavigationPageHead({
  navigation,
  title,
}: NavigationPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={navigation?.overview ? toPlainText(navigation.overview) : ''}
      image={navigation?.coverImage}
      title={navigation?.title}
    />
  )
}
