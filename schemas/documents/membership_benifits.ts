import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'membership_benefits',
  title: 'Membership Benefits',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  fields: [
    
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
    }),
    
    defineField({
        name: 'membership_content',
        type: 'array',
        title: 'content',
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
        name: 'benefits_cta',
        title: 'CTA Text',
        type: 'string',
    })
]
})