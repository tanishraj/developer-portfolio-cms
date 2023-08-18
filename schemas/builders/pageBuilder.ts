import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'document',
  title: 'Page Builder',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'Hero Banner',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'About Section',
          type: 'about',
        }),
        defineArrayMember({
          name: 'Expertise Section',
          type: 'expertise',
        }),
        defineArrayMember({
          name: 'Experience Section',
          type: 'experience',
        }),
        defineArrayMember({
          name: 'Contact Us',
          type: 'contactUs',
        }),
        defineArrayMember({
          name: 'Your Work',
          type: 'work',
        }),
      ],
    }),
  ],
})
