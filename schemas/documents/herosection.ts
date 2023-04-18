import { DocumentIcon, ImageIcon, HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'herosection',
  title: 'Hero Section',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'herotitle',
      description: 'This field is the title of Hero Section.',
      title: 'Hero Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Hero section sub title.',
      title: 'Hero Sub Title',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
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
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'joincta',
      description: 'This field is the join CTA text of Hero Section.',
      title: 'Join CTA',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutcta',
      description: 'This field is the about CTA text of Hero Section.',
      title: 'About CTA',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSelectionType',
      title: 'Hero Selection Type',
      type: 'document',
      fields: [
        {
          name: 'fieldType',
          title: 'Field Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'VideoUrl', value: 'string' },
              { title: 'Imagegallery', value: 'imagegallery' },
            ],
          },
        },
        {
          name: 'imageField',
          title: 'Image Field',
          type: 'image',
          hidden: ({ parent }) => parent && parent.fieldType !== 'image',
        },
        {
          name: 'videoUrl',
          title: 'Video Url',
          type: 'string',
          hidden: ({ parent }) => parent && parent.fieldType !== 'string',
        },
        {
          name: 'imageGalleryField',
          title: 'Image Gallery Field',
          type: 'array',
          of: [{ type: 'image' }],
          hidden: ({ parent }) => parent && parent.fieldType !== 'imagegallery',
        },
      ],
    }),      
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})

