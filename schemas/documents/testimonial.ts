import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon, ImageIcon } from '@sanity/icons'


export default defineType({
    type: 'document',
    title: 'Testimonial',
    name: 'testimonial',
    fields:[
      defineField({
        name: 'title',
        description: 'This field is the title of your Testimonial.',
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
      {
          type: 'array',
          title: 'Testimonials List',
          name: 'testimonial',
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
                        name: 'coverImage',
                        title: 'Testimonial Image',
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
                        title: 'Testimonial Tags',
                        type: 'array',
                        of: [{ type: 'string' }],
                        options: {
                          layout: 'tags',
                        },
                      }),
                      defineField({
                        name: 'author', // Replace with your document name
                        type: 'document',
                        title: 'Testimonial Author Section', // Replace with your document title
                        description:'This File will be used as Testimonial.',
                          fields: [
                            {
                              name: 'testimonial_author',
                              title: 'Testimonial Author Name',
                              type: 'string',
                            },
                          ],
                      }),
                      defineField({
                        name: 'designation', // Replace with your document name
                        type: 'document',
                        title: 'Author Designation Section', // Replace with your document title
                        description:'This File will be used as Testimonial.',
                          fields: [
                            {
                              name: 'author_designation',
                              title: 'Author Designation',
                              type: 'string',
                            },
                          ],
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
                    ],
              }
          ]
      }
    ]
})