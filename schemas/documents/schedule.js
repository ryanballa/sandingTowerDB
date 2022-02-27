export default {
  title: 'Schedule',
  name: 'schedule',
  type: 'document',
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'string',
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'club' }],
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'reference',
      to: [{ type: 'user' }],
    },
  ],
};
