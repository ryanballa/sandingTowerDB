export default {
  title: 'Response',
  name: 'response',
  type: 'document',
  fields: [
    {
      title: 'UserId',
      name: 'userId',
      type: 'string',
    },
    {
      title: 'Survey',
      name: 'survey',
      type: 'reference',
      to: [{ type: 'survey' }],
    },
    {
      title: 'Store',
      name: 'store',
      type: 'reference',
      to: [{ type: 'store' }],
    },
    {
      title: 'Data',
      name: 'data',
      type: 'string',
    },
  ],
};
