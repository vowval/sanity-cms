import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon, ImageIcon } from '@sanity/icons'


export default defineType({
    type: 'document',
    title: 'Footer Section',
    name: 'footersection',
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
      defineField({
        name: 'blockContentDescription',
        type: 'array',
        title: 'Footer Section',
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
    ]
})