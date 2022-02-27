export default {
  title: 'Cab',
  name: 'cab',
  type: 'document',
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'number',
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'reference',
      to: [{ type: 'user' }],
    },
  ],
};
