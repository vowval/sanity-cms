import { LayoutcsListItem } from 'components/pages/home/LayoutcsListItem'
import { PageListItem } from 'components/pages/page/PageListItem'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import Layout from 'components/shared/Layout'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import type { PagePayload, SettingsPayload } from 'types'

import PageHead from './PageHead'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function Page({ page, settings, homePageTitle, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  
  const { body, overview, title, showcaseLayoutcs } = page || {}
  
  return (
    <>
      <PageHead page={page} settings={settings} title={homePageTitle} />

      <Layout settings={settings} preview={preview}>
        <div className="space-y-20">
          {/* Header */}
          {title && <Header centered title={title} description={overview} />}
          {/* Showcase layoutcs */}
          {showcaseLayoutcs && showcaseLayoutcs.length > 0 && (
            <div className="mx-auto max-w-[100rem] rounded-md border">
              {showcaseLayoutcs.map((layoutcs, key) => {
                const href = resolveHref(layoutcs._type, layoutcs.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link key={key} href={href}>
                    <LayoutcsListItem layoutcs={layoutcs} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          )}

          {/* Workaround: scroll to top on route change */}
          <ScrollUp />
        </div>
      </Layout>
    </>
  )
}
