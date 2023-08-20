export const ExperienceSection = {
  name: 'experienceSection',
  type: 'object',
  title: 'Experience Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'totalExperience',
      type: 'experienceList',
      title: 'Add Your Experience',
    },
  ],
}
