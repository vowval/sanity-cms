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
        name: 'footer_top_section',
        type: 'array',
        title: 'Footer Top Section',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
      defineField({
        name: 'joincta',
        description: 'This field is the footer section join CTA text.',
        title: 'Join CTA',
        type: 'string',
      }),
      defineField({
        name: 'logincta',
        description: 'This field is the footer section login CTA text.',
        title: 'Login CTA',
        type: 'string',
      }),
      defineField({
        name: 'footer_first_column',
        title: 'Footer First Column',
        type: 'array',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
      defineField({
        name: 'footer_second_column',
        title: 'Footer Second Column',
        type: 'array',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
      defineField({
        name: 'footer_third_column',
        title: 'Footer Third Column',
        type: 'array',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
      defineField({
        name: 'footer_fourth_column',
        title: 'Footer Fourth Column',
        type: 'array',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
      defineField({
        name: 'footer_fifth_column',
        title: 'Footer Fifth Column',
        type: 'array',
        of: [
          defineArrayMember({
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
            },
            styles: [],
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
          }),
        ],
      }),
    ]
})