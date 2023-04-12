import { usePreview } from 'lib/sanity.preview'
import { navigationBySlugQuery } from 'lib/sanity.queries'
import type { NavigationPayload } from 'types'

import { NavigationPage, NavigationPageProps } from './NavigationPage'

export default function NavigationPreview({
  token,
  settings,
  navigation,
  homePageTitle,
}: {
  token: null | string
} & NavigationPageProps) {
  const navigationPreview: NavigationPayload = usePreview(token, navigationBySlugQuery, {
    slug: navigation?.slug,
  })
  //console.log("navigationPreview",navigationPreview)
  return (
    <NavigationPage
      navigation={navigationPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
