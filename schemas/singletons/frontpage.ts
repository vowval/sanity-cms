import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'frontpage',
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
      name: 'herobgimage',
      title: 'Hero Section BG Image',
      description:
        'This image will be used as the cover image for the Hero BG.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
