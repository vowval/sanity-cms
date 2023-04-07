import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import Link from 'next/link'
import type { Detail_articlesPayload, SettingsPayload } from 'types'

import Layout from '../../shared/Layout'
import Detail_articlesPageHead from './Detail_articlesPageHead'

export interface Detail_articlesPageProps {
  detail_articles: Detail_articlesPayload | undefined
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export function Detail_articlesPage({
  detail_articles,
  settings,
  homePageTitle,
  preview,
}: Detail_articlesPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    coverImage,
    duration,
    overview,
    tags,
    title,
    description,
  } = detail_articles || {}

  const startYear = new Date(duration?.start).getFullYear()
  const endYear = duration?.end ? new Date(duration?.end).getFullYear() : 'Now'

  return (
    <>
      <Detail_articlesPageHead detail_articles={detail_articles} title={homePageTitle} />

      <Layout settings={settings} preview={preview}>
        <div>
          <div className="mb-20 space-y-6">
            {/* Header */}
            <Header title={title} description={overview} />

            <div className="rounded-md border">
              {/* Image  */}
              <ImageBox
                image={coverImage}
                alt={`Cover image for ${title}`}
                classesWrapper="relative aspect-[16/9]"
              />

              <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
                {/* Duration */}
                {!!(startYear && endYear) && (
                  <div className="p-3 lg:p-4">
                    <div className="text-xs md:text-sm">Duration</div>
                    <div className="text-md md:text-lg">{`${startYear} -  ${endYear}`}</div>
                  </div>
                )}

                {/* Tags */}
                <div className="p-3 lg:p-4">
                  <div className="text-xs md:text-sm">Tags</div>
                  <div className="text-md flex flex-row flex-wrap md:text-lg">
                    {tags?.map((tag, key) => (
                      <div key={key} className="mr-1 break-words ">
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            {description && (
              <CustomPortableText
                paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
                value={description}
              />
            )}
            {/* Workaround: scroll to top on route change */}
            <ScrollUp />
          </div>
          <div className="absolute left-0 w-screen border-t" />
        </div>
      </Layout>
    </>
  )
}
