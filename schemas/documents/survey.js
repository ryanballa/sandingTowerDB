export default {
  title: 'Survey',
  name: 'survey',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Complete By',
      name: 'time',
      type: 'datetime',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Stores',
      name: 'stores',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'store' }],
        },
      ],
    },
  ],
};
