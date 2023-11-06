export const ContactSection = {
  name: 'contactSection',
  type: 'object',
  title: 'Contact Us',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'emailSubscriptionApi',
      type: 'string',
      title: 'Email Subscription Id',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'contactForm',
      type: 'array',
      title: 'Contact Form',
      of: [
        {
          name: 'formControls',
          type: 'formControls',
          title: 'Form Controls',
        },
      ],
    },
  ],
}
