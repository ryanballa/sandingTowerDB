export default {
  title: 'Car Generator',
  name: 'carGenerator',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
    },
    {
      title: 'Max Input',
      name: 'maxInput',
      type: 'number',
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'destination' }],
    },
  ],
};
