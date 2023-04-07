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