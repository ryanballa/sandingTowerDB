export default {
  title: 'Work Order',
  name: 'workOrder',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Difficulty',
      name: 'difficulty',
      type: 'string',
    },
    {
      title: 'Work Order Stop',
      name: 'workOrderStop',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'workOrderStop' }],
        },
      ],
    },
    {
      title: 'Assignee',
      name: 'assignee',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'club' }],
    },
  ],
};
