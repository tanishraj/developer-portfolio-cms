export const SkillsSection = {
  name: 'skillsSection',
  type: 'object',
  title: 'Skills Section',
  fields: [
    {
      name: 'title',
      type: 'title',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'skillsSet',
      type: 'skillsList',
      title: 'Add Your Skills',
    },
  ],
}
