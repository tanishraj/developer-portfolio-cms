import {defineField, defineType} from 'sanity'

export const expertiseType = defineType({
  name: 'expertise',
  type: 'object',
  title: 'Expertise Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expertiseCards',
      type: 'array',
      title: 'Add Your Expertise',
      of: [
        defineField({
          name: 'yourExpertise',
          type: 'object',
          title: 'Your Expertise',
          fields: [
            {
              name: 'socialMediaLink',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'socialMediaIcon',
              type: 'text',
              title: 'Expertise Summary',
            },
          ],
        }),
      ],
    }),
  ],
})
