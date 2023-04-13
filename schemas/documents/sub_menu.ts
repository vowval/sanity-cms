import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType(
    {
        name: 'sub_menu',
        type: 'document',
        title: 'Sub Menu',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },

          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96,
              isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
            validation: (rule) => rule.required(),
          },

          {
            name: 'sub_items',
            type: 'array',
            title: 'Sub Items',
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
                  ],
              }
          ]
          },
        ],
      }
      
)