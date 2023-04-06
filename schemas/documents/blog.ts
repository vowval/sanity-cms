import { defineArrayMember, defineField, defineType } from 'sanity'


export default defineType({
    type: 'document',
    title: 'Blog',
    name: 'blog',
    fields:[
      defineField({
        name: 'title',
        description: 'This field is the title of your recommend.',
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
                        name: 'overview',
                        description:
                          'Used both for the <meta> description tag for SEO, and recommend subheader.',
                        title: 'Overview',
                        type: 'array',
                        of: [
                          // Paragraphs
                          defineArrayMember({
                            lists: [],
                            marks: {
                              annotations: [],
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
                        name: 'duration',
                        title: 'Duration',
                        type: 'duration',
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
                          // Custom blocks
                          defineArrayMember({
                            name: 'timeline',
                            type: 'timeline',
                          }),
                          
                        ],
                      }),
                    ],
              }
          ]
      }
    ]
})