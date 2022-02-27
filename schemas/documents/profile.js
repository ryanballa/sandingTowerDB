export default {
  title: 'Profile',
  name: 'profile',
  type: 'document',
  fields: [
    {
      title: 'Bio',
      name: 'bio',
      type: 'string',
    },
    {
      title: 'Font Size',
      name: 'fontSize',
      type: 'number',
    },
    {
      title: '12 Hour Time',
      name: 'timePreference',
      type: 'boolean',
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'reference',
      to: [{ type: 'user' }],
    },
  ],
};
