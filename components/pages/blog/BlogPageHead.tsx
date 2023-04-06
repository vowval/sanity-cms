import { toPlainText } from '@portabletext/react'
import { SiteMeta } from 'components/global/SiteMeta'
import { BlogPayload } from 'types'

export interface BlogPageHeadProps {
  blog: BlogPayload | undefined
  title: string | undefined
}

export default function BlogPageHead({
  blog,
  title,
}: BlogPageHeadProps) {
  return (
    <SiteMeta
      baseTitle={title}
      description={blog?.overview ? toPlainText(blog.overview) : ''}
      image={blog?.coverImage}
      title={blog?.title}
    />
  )
}
