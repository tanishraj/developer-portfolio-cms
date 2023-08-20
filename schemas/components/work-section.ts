export const WorkSection = {
  name: 'workSection',
  type: 'object',
  title: 'My Work',
  fields: [
    {
      name: 'workTitle',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'mywork',
      type: 'workList',
      title: 'Work List',
    },
  ],
}
