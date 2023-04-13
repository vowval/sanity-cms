import { defineArrayMember, defineField, defineType } from 'sanity'


export default defineType({
    type: 'document',
    title: 'Navigation',
    name: 'navigation',
    fields:[
      defineField({
        name: 'title',
        description: 'This field is the title of your navigation.',
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
        name: 'pageBuilder',
        type: 'array',
        title: 'Navigation Items',
        of: [
          defineArrayMember({
            type: 'reference',
            to: [
              { type: 'sub_menu' },
            ],
          }),
        ],
      }),
    ]
})