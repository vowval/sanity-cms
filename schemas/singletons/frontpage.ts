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
    // defineField({
    //   name: 'recommends_first_article_title',
    //   description: 'This field is the recommends first article title.',
    //   title: 'Recommends 1st Article Title',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_first_article_image',
    //   title: 'Recommends 1st Article Image',
    //   description:
    //     'This image will be used as the thumbnail image for the Recommends First Article.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_first_article_overview',
    //   description:
    //     'Recommends 1st article overview.',
    //   title: 'Recommends 1st article overview Text',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155).required(),
    // }),
    // defineField({
    //   name: 'recommends_first_article_update',
    //   description: 'Recommends 1st Article Update Date',
    //   title: 'Recommends 1st Article Title Updated Date',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_first_article_description',
    //   description:
    //     'Recommends 1st article description.',
    //   title: 'Recommends 1st article description Text',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155).required(),
    // }),
    // defineField({
    //   name: 'recommends_second_article_title',
    //   description: 'This field is the recommends second article title.',
    //   title: 'Recommends 2nd Article Title',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_second_article_image',
    //   title: 'Recommends 2nd Article Image',
    //   description:
    //     'This image will be used as the thumbnail image for the Recommends second Article.',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_second_article_overview',
    //   description:
    //     'Recommends 2nd article overview.',
    //   title: 'Recommends 2nd article overview Text',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155).required(),
    // }),
    // defineField({
    //   name: 'recommends_second_article_update',
    //   description: 'Recommends 2nd Article Update Date',
    //   title: 'Recommends 2nd Article Title Updated Date',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'recommends_second_article_description',
    //   description:
    //     'Recommends 2nd article description.',
    //   title: 'Recommends 2nd article description Text',
    //   type: 'array',
    //   of: [
    //     // Paragraphs
    //     defineArrayMember({
    //       lists: [],
    //       marks: {
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'Link',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'Url',
    //               },
    //             ],
    //           },
    //         ],
    //         decorators: [
    //           {
    //             title: 'Italic',
    //             value: 'em',
    //           },
    //           {
    //             title: 'Strong',
    //             value: 'strong',
    //           },
    //         ],
    //       },
    //       styles: [],
    //       type: 'block',
    //     }),
    //   ],
    //   validation: (rule) => rule.max(155).required(),
    // }),
    // defineField({
    //   name: 'showcaseProjects',
    //   title: 'Showcase projects',
    //   description:
    //     'These are the projects that will appear first on your landing page.',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{ type: 'project' }],
    //     }),
    //   ],
    // }),
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
