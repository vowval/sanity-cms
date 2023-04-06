import { usePreview } from 'lib/sanity.preview'
import { blogBySlugQuery } from 'lib/sanity.queries'
import type { BlogPayload } from 'types'

import { BlogPage, BlogPageProps } from './BlogPage'

export default function BlogPreview({
  token,
  settings,
  blog,
  homePageTitle,
}: {
  token: null | string
} & BlogPageProps) {
  const blogPreview: BlogPayload = usePreview(token, blogBySlugQuery, {
    slug: blog?.slug,
  })
  //console.log("blogPreview",blogPreview)
  return (
    <BlogPage
      blog={blogPreview}
      settings={settings}
      homePageTitle={homePageTitle}
      preview={true}
    />
  )
}
