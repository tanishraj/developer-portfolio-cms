import {defineType, defineField} from 'sanity'

export const workTypes = defineType({
  name: 'work',
  type: 'object',
  title: 'My Work',
  fields: [
    defineField({
      name: 'workTitle',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'mywork',
      type: 'array',
      title: 'My Work',
      of: [
        defineField({
          name: 'workDetails',
          type: 'object',
          title: 'Work Details',
          fields: [
            {
              name: 'workSample',
              type: 'image',
              title: 'Work Sample',
            },
            {
              name: 'workLiveUrl',
              type: 'url',
              title: 'Link your work',
            },
          ],
        }),
      ],
    }),
  ],
})
