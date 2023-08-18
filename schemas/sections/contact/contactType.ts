import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contactUs',
  type: 'object',
  title: 'Contact Us',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactForm',
      type: 'array',
      title: 'Contact Form',
      of: [
        defineField({
          name: 'formControls',
          type: 'object',
          title: 'Form Controls',
          fields: [
            {
              name: 'controlLable',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'controlType',
              type: 'string',
              title: 'Control Type',
            },
          ],
        }),
      ],
    }),
  ],
})
