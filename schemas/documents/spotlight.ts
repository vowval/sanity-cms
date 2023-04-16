import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon, ImageIcon } from '@sanity/icons'

export default defineType({
    type: 'document',
    title: 'Spotlight',
    name: 'spotlight',
    fields:[
      defineField({
        name: 'title',
        description: 'This field is the title of your spotlight.',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      {
          type: 'array',
          title: 'Post',
          name: 'post',
          of:[
              {
                  type: 'document',
                  fields: [
                      defineField({
                        name: 'title',
                        description: 'This field is the title of your post.',
                        title: 'Title',
                        type: 'string',
                        validation: (rule) => rule.required(),
                      }),
                      defineField({
                        name: 'slug',
                        title: 'Slug',
                        type: 'slug',
                        options: {
                          source: function(doc, options) {
                            return options.parent.title
                          }
                        }
                        // validation: (rule) => rule.required(),
                      }),
                      defineField({
                        name: 'recommended',
                        description: 'Check this box if you want to recommend this.',
                        title: 'Recommended',
                        type: 'boolean',
                        validation: (rule) => rule.required(),
                      }),
                      defineField({
                        name: 'blockContentOverview',
                        type: 'array',
                        title: 'Overview',
                        of: [
                          defineField({
                            type: 'block',
                            marks: {
                              annotations: [
                                {
                                  name: 'fontstyle',
                                  type: 'object',
                                  title: 'Font Styles & Link',
                                  icon: DocumentIcon,
                                  fields: [
                                    {
                                      name: 'href',
                                      type: 'url',
                                      title: 'Url',
                                    },
                                    {
                                      name: 'fontFamily',
                                      title: 'Font Family',
                                      type: 'string',
                                      options: {
                                        list: [
                                          { title: 'Arial', value: 'Arial' },
                                          { title: 'Helvetica', value: 'Helvetica' },
                                          { title: 'Times New Roman', value: 'Times New Roman' },
                                        ],
                                      },
                                    },
                                    {
                                      name: 'color', 
                                      title: 'Color', 
                                      type: 'color',
                                    },
                                  ],
                                },
                              ],
                            }
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
                                description:
                                  'Alternative text for screenreaders. Falls back on caption if not set',
                              }),
                            ],
                          }),
                        ]
                      }),
                      defineField({
                        name: 'coverImage',
                        title: 'Cover Image',
                        description:
                          'This image will be used as the cover image for the article. If you choose to add it to the show case articles, this is the image displayed in the list within the homepage.',
                        type: 'image',
                        options: {
                          hotspot: true,
                        },
                        validation: (rule) => rule.required(),
                      }),
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
                        name: 'blockContentDescription',
                        type: 'array',
                        title: 'Description',
                        of: [
                          defineField({
                            type: 'block',
                            marks: {
                              annotations: [
                              {
                                name: 'fontstyle',
                                type: 'object',
                                title: 'Font Styles & Link',
                                icon: DocumentIcon,
                                fields: [
                                  {
                                    name: 'href',
                                    type: 'url',
                                    title: 'Url',
                                  },
                                  {
                                    name: 'fontFamily',
                                    title: 'Font Family',
                                    type: 'string',
                                    options: {
                                      list: [
                                        { title: 'Arial', value: 'Arial' },
                                        { title: 'Helvetica', value: 'Helvetica' },
                                        { title: 'Times New Roman', value: 'Times New Roman' },
                                      ],
                                    },
                                  },
                                  {
                                    name: 'color', 
                                    title: 'Color', 
                                    type: 'color',
                                  },
                                ],
                              },
                              ],
                            }
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
                                description:
                                  'Alternative text for screenreaders. Falls back on caption if not set',
                              }),
                            ],
                          }),
                        ]
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
                        title: 'Podcast Section', // Replace with your document title
                        description:'This File will be used as Podcast for the article.',
                          fields: [
                            {
                              name: 'podcast_iframe_tag',
                              title: 'iFrame Tag',
                              type: 'array',
                              of: [
                                {
                                  type: 'string',
                                },
                              ],
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
                      defineField({
                        name: 'youtube', // Replace with your document name
                        type: 'document',
                        title: 'Youtube Section', // Replace with your document title
                        description:'This File will be used as Youtube for the article.',
                          fields: [
                            {
                              name: 'youtube_src_url',
                              title: 'Youtube Link',
                              type: 'array',
                              of: [
                                {
                                  type: 'string',
                                },
                              ],
                            },
                          ],
                      }),
                    ],
              }
          ]
      }
    ]
})