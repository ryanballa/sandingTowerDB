export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Admin',
      name: 'isAdmin',
      type: 'boolean',
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'club' }],
        },
      ],
    },
  ],
};
