// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import club from './documents/club';
import user from './documents/user';
import cab from './documents/cab';
import locomotive from './documents/locomotive';
import profile from './documents/profile';
import changelog from './documents/changelog';
import tower from './documents/tower';
import issue from './documents/issue';
import schedule from './documents/schedule';
import railcar from './documents/railcar';
import destination from './documents/destination';
import workOrder from './documents/workOrder';
import workOrderItem from './documents/workOrderItem';
import carGenerator from './documents/carGenerator';
import workOrderStop from './documents/workOrderStop';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    club,
    user,
    cab,
    locomotive,
    profile,
    changelog,
    tower,
    issue,
    schedule,
    railcar,
    destination,
    workOrder,
    workOrderItem,
    carGenerator,
    workOrderStop,
  ]),
});
