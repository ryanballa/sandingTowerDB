export default {
  title: 'Work Order Stop',
  name: 'workOrderStop',
  type: 'document',
  fields: [
    {
      title: 'Order',
      name: 'order',
      type: 'number',
    },
    {
      title: 'Station Stop',
      name: 'isStationStop',
      type: 'boolean',
    },
    {
      title: 'Work Order',
      name: 'workOrder',
      type: 'reference',
      to: [{ type: 'workOrder' }],
    },
    {
      title: 'Destination',
      name: 'destination',
      type: 'reference',
      to: [{ type: 'destination' }],
    },
  ],
};
