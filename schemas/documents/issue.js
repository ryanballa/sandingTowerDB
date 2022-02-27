export default {
  title: 'Issue',
  name: 'issue',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
    },
    {
      title: 'Urgency',
      name: 'urgency',
      type: 'string',
    },
    {
      title: 'Responder',
      name: 'responder',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
        },
      ],
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'tower' }],
    },
  ],
};
