import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { LayoutcsPayload, SettingsPayload } from 'types'

import Layoutcs from '../../shared/Layout'
import LayoutcsPageHead from './LayoutcsPageHead'

export interface LayoutcsPageProps {
  layoutcs: LayoutcsPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function LayoutcsPage({
  layoutcs,
  settings,
  homePageTitle,
  preview,
}: LayoutcsPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview,
    title,
  } = layoutcs || {}

  return (
    <>
      <LayoutcsPageHead layoutcs={layoutcs} title={homePageTitle} />

      <Layoutcs settings={settings} preview={preview}>
        <div>
          <div className="mb-20 space-y-6">
            {/* Header */}
            <Header title={title} description={overview} />

            

            
            
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
          <div dangerouslySetInnerHTML={{__html:layoutcs.myCodeField.code}} ></div>
        </div>
      </Layoutcs>
    </>
  )
}
