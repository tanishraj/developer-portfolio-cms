import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'HERO BANNER',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
