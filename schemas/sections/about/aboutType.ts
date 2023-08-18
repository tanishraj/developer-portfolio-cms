import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  type: 'object',
  title: 'About Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'About Youself',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Your Photo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media',
      of: [
        defineField({
          name: 'social',
          type: 'object',
          title: 'Social Media Links',
          fields: [
            {
              name: 'socialMediaLink',
              type: 'url',
              title: 'Social Media Link',
            },
            {
              name: 'socialMediaIcon',
              type: 'image',
              title: 'Social Media Icon',
            },
          ],
        }),
      ],
    }),
  ],
})
