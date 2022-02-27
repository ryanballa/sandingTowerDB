export default {
  title: 'Destination',
  name: 'destination',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'club' }],
    },
  ],
};
