export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    case 'layoutcs':
        return slug ? `/layoutcs/${slug}` : undefined
    case 'partners':
        return slug ? `/partners/${slug}` : undefined
    case 'recommend':
        return slug ? `/recommend/${slug}` : undefined
    case 'recent':
        return slug ? `/recent/${slug}` : undefined
    case 'article':
        return slug ? `/article/${slug}` : undefined
    case 'blog':
        return slug ? `/blog/${slug}` : undefined
    case 'detail_articles':
        return slug ? `/detail_articles/${slug}` : undefined
    case 'navigation':
        return slug ? `/navigation/${slug}` : undefined
    case 'sub_menu':
        return slug ? `/sub_menu/${slug}` : undefined
    case 'spotlight':
        return slug ? `/spotlight/${slug}` : undefined
    case 'testimonial':
        return slug ? `/testimonial/${slug}` : undefined
    case 'footersection':
        return slug ? `/footersection/${slug}` : undefined
          
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
