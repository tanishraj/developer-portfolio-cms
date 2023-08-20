export const ExpertiseSection = {
  name: 'expertiseSection',
  type: 'object',
  title: 'Expertise Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'expertiseList',
      type: 'expertiseList',
      title: 'Add Your Expertise',
    },
  ],
}
