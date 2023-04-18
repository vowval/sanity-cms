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

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const articlePaths = groq`
  *[_type == "article" && slug.current != null].slug.current
`

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const blogPaths = groq`
  *[_type == "blog" && slug.current != null].slug.current
`
export const detail_articlesBySlugQuery = groq`
  *[_type == "detail_articles" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
    galleryImages,
  }
`
export const detail_articlesPaths = groq`
  *[_type == "detail_articles" && slug.current != null].slug.current
`
export const navigationBySlugQuery = groq`
  *[_type == "navigation" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
    galleryImages,
  }
`
export const navigationPaths = groq`
  *[_type == "navigation" && slug.current != null].slug.current
`
export const sub_menuBySlugQuery = groq`
  *[_type == "sub_menu" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const sub_menuPaths = groq`
  *[_type == "sub_menu" && slug.current != null].slug.current
`
export const spotlightBySlugQuery = groq`
  *[_type == "spotlight" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const spotlightPaths = groq`
  *[_type == "spotlight" && slug.current != null].slug.current
`

export const testimonialBySlugQuery = groq`
  *[_type == "testimonial" && slug.current == $slug][0] {
    _id,
    coverImage,
    "slug": slug.current,
    tags,
    title,
  }
`
export const testimonialPaths = groq`
  *[_type == "testimonial" && slug.current != null].slug.current
`
export const footersectionBySlugQuery = groq`
  *[_type == "footersection" && slug.current == $slug][0] {
    _id,
    "slug": slug.current,
    tags,
    title,
  }
`
export const footersectionPaths = groq`
  *[_type == "footersection" && slug.current != null].slug.current
`
export const herosectionBySlugQuery = groq`
  *[_type == "herosection" && slug.current == $slug][0] {
    _id,
    coverImage,
    description,
    overview,
    site,
    "slug": slug.current,
    title,
  }
`
export const herosectionPaths = groq`
  *[_type == "herosection" && slug.current != null].slug.current
`