export default {
  title: 'Work Order Item',
  name: 'workOrderItem',
  type: 'document',
  fields: [
    {
      title: 'Car',
      name: 'car',
      type: 'reference',
      to: [{ type: 'railcar' }],
    },
    {
      title: 'Pickup',
      name: 'pickup',
      type: 'reference',
      to: [{ type: 'carGenerator' }],
    },
    {
      title: 'Dropoff',
      name: 'dropoff',
      type: 'reference',
      to: [{ type: 'carGenerator' }],
    },
    {
      title: 'Drop Off Stop',
      name: 'dropOffStop',
      type: 'reference',
      to: [{ type: 'workOrderStop' }],
    },
    {
      title: 'Pick Up Stop',
      name: 'pickUpStop',
      type: 'reference',
      to: [{ type: 'workOrderStop' }],
    },
    {
      title: 'Membership',
      name: 'membership',
      type: 'reference',
      to: [{ type: 'workOrder' }],
    },
  ],
};
