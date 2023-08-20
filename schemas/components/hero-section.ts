export const HeroSection = {
  name: 'heroSection',
  type: 'object',
  title: 'Hero Banner',
  fields: [
    {
      name: 'title',
      type: 'title',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'title',
      title: 'Sub Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
