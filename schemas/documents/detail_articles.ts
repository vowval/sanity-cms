import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'detail_articles',
  title: 'Detail Articles',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your recommend.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description: 'This image will be used as the cover image for the article. If you choose to add it to the show case articles, this is the image displayed in the list within the homepage.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero_section',
      title: 'Article Hero Section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),
        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),
    
    // defineField({
    //   name: 'duration',
    //   title: 'Duration',
    //   type: 'duration',
    // }),

    defineField({
      name: 'tags',
      title: 'Image Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'description',
      title: 'Article Description',
      type: 'array',
        of: [
          defineArrayMember({
            type: 'block',
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'Url',
                    },
                  ],
                },
              ],
            },
            styles: [],
          }),        
          defineField({
            type: 'image',
            icon: ImageIcon,
            name: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            preview: {
              select: {
                imageUrl: 'asset.url',
                title: 'caption',
              },
            },
            fields: [
              defineField({
                title: 'Caption',
                name: 'caption',
                type: 'string',
              }),
              defineField({
                name: 'alt',
                type: 'string',
                title: 'Alt text',
                description: 'Alternative text for screenreaders. Falls back on caption if not set',
              }),
            ],
          }),
        ],
    }),
    defineField({
      name: 'galleryImages',
      type: 'document',
      title: 'Image Gallery',
      description: 'This image will be used as the glallery image for the article.',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
              {
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
    }),
    defineField({
      name: 'articlePdf', // Replace with your document name
      type: 'document',
      title: 'Article PDF', // Replace with your document title
      description: 'This File will be used as PDF for the article.',
        fields: [
          {
            name: 'pdfFile', // Replace with your field name
            type: 'file', // Use the 'file' type for uploading files
            title: 'PDF File', // Replace with your field title
            options: {
              accept: '.pdf', // Specify the accepted file format(s) (e.g. PDF)
            },
          },
        ],
    }),
    defineField({
      name: 'podcast', // Replace with your document name
      type: 'document',
      title: 'Podcast', // Replace with your document title
      description:'This File will be used as Podcast for the article.',
        fields: [
          {
            name: 'audioFile', // Replace with your field name
            type: 'file', // Use the 'file' type for uploading files
            title: 'Audio File', // Replace with your field title
            options: {
              accept: '.mp3', // Specify the accepted file format(s) (e.g. MP3)
            },
          },
        ],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'document',
      fields: [
        {
          name: 'videoFile',
          title: 'Video File',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'previewImage',
          title: 'Preview Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
