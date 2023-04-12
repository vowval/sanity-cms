import { usePreview } from 'lib/sanity.preview'
import { sub_menuBySlugQuery } from 'lib/sanity.queries'
import type { Sub_menuPayload } from 'types'

import { Sub_menuPage, Sub_menuPageProps } from './Sub_menuPage'

export default function Sub_menuPreview({
  token,
  settings,
  sub_menu,
  homePageTitle,
}: {
  token: null | string
} & Sub_menuPageProps) {
  const sub_menuPreview: Sub_menuPayload = usePreview(token, sub_menuBySlugQuery, {
    slug: sub_menu?.slug,
  })

  return (
    <Sub_menuPage
      sub_menu={sub_menuPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
