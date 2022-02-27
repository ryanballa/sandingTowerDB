export default {
  title: 'Locomotive',
  name: 'locomotive',
  type: 'document',
  fields: [
    {
      title: 'Address',
      name: 'address',
      type: 'number',
    },
    {
      title: 'Engine Type',
      name: 'engineType',
      type: 'string',
    },
    {
      title: 'Road',
      name: 'road',
      type: 'string',
    },
    {
      title: 'Road Number',
      name: 'roadNumber',
      type: 'string',
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'reference',
      to: [{ type: 'user' }],
    },
  ],
};
