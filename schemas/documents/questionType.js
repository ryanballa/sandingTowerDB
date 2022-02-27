export default {
  title: 'Question Type',
  name: 'questionType',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
    },
    {
      title: 'Positive Title',
      name: 'positiveTitle',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'scale',
    },
    {
      title: 'Negative Title',
      name: 'negativeTitle',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'scale',
    },
    {
      title: 'Boolean Ask',
      name: 'booleanAsk',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'boolean',
    },
  ],
};
