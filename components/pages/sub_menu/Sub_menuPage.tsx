import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { Sub_menuPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import Sub_menuPageHead from './Sub_menuPageHead'

export interface Sub_menuPageProps {
  sub_menu: Sub_menuPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function Sub_menuPage({
  sub_menu,
  settings,
  homePageTitle,
  preview,
}: Sub_menuPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
  } = sub_menu || {}


  return (
    <>
      <Sub_menuPageHead sub_menu={sub_menu} title={homePageTitle} />

      <Layout settings={settings} preview={preview}>
        <div>
          <div className="mb-20 space-y-6">

            <div className="rounded-md border">

              <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-y-0 lg:divide-x">                


              </div>
            </div>

            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
