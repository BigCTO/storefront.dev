// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import tool from './tool'
import guide from './guide'
import expert from './expert'
import storefront from './storefront'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Your types here
    tool,
    guide,
    expert,
    blockContent,
    storefront
  
  ]),
})
