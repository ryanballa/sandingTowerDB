export default {
  title: 'Question',
  name: 'question',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Question Number',
      name: 'questionNumber',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Additional Instructions',
      name: 'additionalInstructions',
      type: 'string',
    },
    {
      title: 'Show Notes',
      name: 'showNotes',
      type: 'boolean',
    },
    {
      title: 'Surveys',
      name: 'surveys',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'survey' }],
        },
      ],
    },
    {
      title: 'Question Type',
      name: 'questionType',
      type: 'reference',
      to: [{ type: 'questionType' }],
    },
  ],
};
