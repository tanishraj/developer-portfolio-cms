export const AboutSection = {
  name: 'aboutSection',
  type: 'object',
  title: 'About Section',
  fields: [
    {
      name: 'title',
      type: 'title',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'content',
      type: 'content',
      title: 'About Youself',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Your Photo',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'socialMediaList',
      type: 'socialMediaList',
      title: 'Social Media List',
    },
  ],
}
