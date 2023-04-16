import { defineType } from 'sanity'

export default defineType(
    {
        name: 'partnerlogo',
        type: 'document',
        title: 'Partners',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'logos',
            type: 'array',
            title: 'Logos',
            of: [
                { 
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alt tag'
                        }
                    ]
                },


            ],
          },
        ],
      }
      
)