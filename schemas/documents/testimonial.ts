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
        defineField({
          name: 'testimony_title',
          title: 'Testimonial Title',
          type: 'string',
        }),
        defineField({
          name: 'testimony_sub_title',
          title: 'Testimonial Sub Title',
          type: 'array',
          of:[{
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
          }]
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
                }]
              })
            ]
          }]

        }


    ]
})