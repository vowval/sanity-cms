import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  homePageQuery,
  homePageTitleQuery,
  pagePaths,
  pagesBySlugQuery,
  projectBySlugQuery,
  projectPaths,
  layoutcsBySlugQuery,
  layoutcsPaths,
  settingsQuery,
  partnersBySlugQuery,
  partnersPaths,
  recommendBySlugQuery,
  recommendPaths,
  recentBySlugQuery,
  recentPaths,
  articleBySlugQuery,
  articlePaths,
  blogBySlugQuery,
  blogPaths,
  detail_articlesBySlugQuery,
  detail_articlesPaths,
  navigationBySlugQuery,
  navigationPaths,
  sub_menuBySlugQuery,
  sub_menuPaths,
  spotlightBySlugQuery,
  spotlightPaths,
  testimonialBySlugQuery,
  testimonialPaths,
  footersectionBySlugQuery,
  footersectionPaths,
  
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  LayoutcsPayload,
  SettingsPayload,
  PartnersPayload,
  RecommendPayload,
  RecentPayload,
  ArticlePayload,
  BlogPayload,
  Detail_articlesPayload,
  NavigationPayload,
  Sub_menuPayload,
  SpotlightPayload,
  TestimonialPayload,
  FootersectionPayload,
  
} from 'types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getPartnersBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PartnersPayload | undefined> {
  return await sanityClient(token)?.fetch(partnersBySlugQuery, { slug })
}

export async function getLayoutcsBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<LayoutcsPayload | undefined> {
  return await sanityClient(token)?.fetch(layoutcsBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

export async function getRecommendBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<RecommendPayload | undefined> {
  return await sanityClient(token)?.fetch(recommendBySlugQuery, { slug })
}

export async function getRecentBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<RecentPayload | undefined> {
  return await sanityClient(token)?.fetch(recentBySlugQuery, { slug })
}

export async function getArticleBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ArticlePayload | undefined> {
  return await sanityClient(token)?.fetch(articleBySlugQuery, { slug })
}

export async function getBlogBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<BlogPayload | undefined> {
  return await sanityClient(token)?.fetch(blogBySlugQuery, { slug })
}

export async function getDetail_articlesBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<Detail_articlesPayload | undefined> {
  return await sanityClient(token)?.fetch(detail_articlesBySlugQuery, { slug })
}

export async function getNavigationBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<NavigationPayload | undefined> {
  return await sanityClient(token)?.fetch(navigationBySlugQuery, { slug })
}

export async function getSpotlightBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<SpotlightPayload | undefined> {
  return await sanityClient(token)?.fetch(spotlightBySlugQuery, { slug })
}

export async function getTestimonialBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<TestimonialPayload | undefined> {
  return await sanityClient(token)?.fetch(testimonialBySlugQuery, { slug })
}

export async function getSub_menuBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<Sub_menuPayload | undefined> {
  return await sanityClient(token)?.fetch(sub_menuBySlugQuery, { slug })
}

export async function getFootersectionBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<FootersectionPayload | undefined> {
  return await sanityClient(token)?.fetch(footersectionBySlugQuery, { slug })
}

export async function getProjectPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(projectPaths)
}

export async function getPartnersPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(partnersPaths)
}

export async function getLayoutcsPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(layoutcsPaths)
}

export async function getRecommendPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(recommendPaths)
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}

export async function getRecentPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(recentPaths)
}

export async function getArticlePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(articlePaths)
}

export async function getBlogPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(blogPaths)
}

export async function getDetail_articlesPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(detail_articlesPaths)
}

export async function getNavigationPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(navigationPaths)
}

export async function getSub_menuPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(sub_menuPaths)
}

export async function getSpotlightPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(spotlightPaths)
}

export async function getTestimonialPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(testimonialPaths)
}

export async function getFootersectionPaths(): Promise<string[]> {
  return await sanityClient()?.fetch(footersectionPaths)
}