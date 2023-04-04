import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
    showcaseLayoutcs[]->{
      _type,
      overview,
      "slug": slug.current,
      title,
      myCodeField,
    },
    pageBuilder[]->{
      _id,
      _type,
      overview,
      "slug": slug.current,
      title,
    }
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
export const layoutcsBySlugQuery = groq`
  *[_type == "layoutcs" && slug.current == $slug][0] {
    _id,
    client,
    overview,
    site,
    "slug": slug.current,
    title,
    myCodeField,
  }
`
export const layoutcsPaths = groq`
  *[_type == "layoutcs" && slug.current != null].slug.current
`
export const partnersBySlugQuery = groq`
  *[_type == "partners" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const partnersPaths = groq`
  *[_type == "partners" && slug.current != null].slug.current
`
export const recommendBySlugQuery = groq`
  *[_type == "recommend" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const recommendPaths = groq`
  *[_type == "recommend" && slug.current != null].slug.current
`

export const recentBySlugQuery = groq`
  *[_type == "recent" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const recentPaths = groq`
  *[_type == "recent" && slug.current != null].slug.current
`