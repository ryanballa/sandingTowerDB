export default {
  title: 'Railcar',
  name: 'railcar',
  type: 'document',
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
    },
    {
      title: 'Road',
      name: 'road',
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
