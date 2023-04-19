import { defineArrayMember, defineField, defineType } from 'sanity'
import { DocumentIcon, ImageIcon } from '@sanity/icons'


export default defineType({
    type: 'document',
    title: 'Testimonials',
    name: 'testimonials',
    fields:[
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        {
          type: 'array',
          title: 'testimony',
          name: 'testimony',
          of:[{
            type: 'document',
            fields: [
              defineField({
                name: 'photo',
                title: 'Photo',
                type: 'image',
              }),
              defineField({
                name: 'name',
                title: 'Name',
                type: 'string',
              }),
              defineField({
                name: 'designation',
                title: 'Designation/Position',
                type: 'string',
              }),
              defineField({
                name: 'testimony',
                title: 'testimony',
                type: 'array',
                of:[{
                  type: 'block'
                }]
              })
            ]
          }]

        }
    ]
})