import {defineArrayMember} from 'sanity'

export const PageBuilder = {
  name: 'pageBuilder',
  type: 'document',
  title: 'Page Builder',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Name',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'components',
      type: 'array',
      title: 'Add Components',
      of: [
        defineArrayMember({
          name: 'heroSection',
          type: 'heroSection',
          title: 'Hero Section',
        }),
        defineArrayMember({
          name: 'aboutSection',
          type: 'aboutSection',
          title: 'About Section',
        }),
        defineArrayMember({
          name: 'expertiseSection',
          type: 'expertiseSection',
          title: 'Expertise Section',
        }),
        defineArrayMember({
          name: 'skillsSection',
          type: 'skillsSection',
          title: 'Skills Section',
        }),
        defineArrayMember({
          name: 'experienceSection',
          type: 'experienceSection',
          title: 'Experience Section',
        }),
        defineArrayMember({
          name: 'contactSection',
          type: 'contactSection',
          title: 'Contact Us',
        }),
        defineArrayMember({
          name: 'workSection',
          type: 'workSection',
          title: 'Work Section',
        }),
      ],
    },
  ],
}
