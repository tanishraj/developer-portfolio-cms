import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  type: 'object',
  title: 'Experience Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyExperience',
      type: 'array',
      title: 'Add Your Experience',
      of: [
        defineField({
          name: 'yourExperience',
          type: 'object',
          title: 'Your Experience',
          fields: [
            {
              name: 'companyName',
              type: 'string',
              title: 'Company Name',
            },
            {
              name: 'yearOfJoining',
              type: 'number',
              title: 'Year you joined',
            },
            {
              name: 'yearOfResignation',
              type: 'number',
              title: 'Year you resigned',
            },
          ],
        }),
      ],
    }),
  ],
})
