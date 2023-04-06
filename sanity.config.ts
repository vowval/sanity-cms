/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import page from 'schemas/documents/page'
// import project from 'schemas/documents/project'
// import layoutcs from 'schemas/documents/layoutcs'
import duration from 'schemas/objects/duration'
import milestone from 'schemas/objects/milestone'
import timeline from 'schemas/objects/timeline'
// import home from 'schemas/singletons/home'
import frontpage from 'schemas/singletons/frontpage'
// import settings from 'schemas/singletons/settings'
// import partners from 'schemas/documents/partners'
// import recommend from 'schemas/documents/recommend'
// import recent from 'schemas/documents/recent'
import partner from 'schemas/partner'
import {codeInput} from '@sanity/code-input'
import blog from 'schemas/documents/blog'
import article from 'schemas/documents/article'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Next.js Personal Website with Sanity.io'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  // home.name,
  page.name,
  // project.name,
  // layoutcs.name,
  // partners.name,
  // recommend.name,
  // recent.name,
  partner.name,
  blog.name,
  article.name,
]

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      // home,
      // settings,
      // Documents
      duration,
      page,
      // project,
      // layoutcs,
      // Objects
      milestone,
      timeline,
      frontpage,
      // partners,
      // recommend,
      // recent,
      partner,
      blog,
      article,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([/*home, settings,*/ frontpage]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([/*home.name, settings.name,*/ frontpage.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
})
