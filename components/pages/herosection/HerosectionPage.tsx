import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { HerosectionPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import HerosectionPageHead from './HerosectionPageHead'

export interface HerosectionPageProps {
  herosection: HerosectionPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function HerosectionPage({
  herosection,
  settings,
  homePageTitle,
  preview,
}: HerosectionPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    coverImage,
    tags,
    title,
  } = herosection || {}


  return (
    <>
      <HerosectionPageHead herosection={herosection} title={homePageTitle} />

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
