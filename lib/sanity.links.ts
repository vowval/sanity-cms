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
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
