import { Endpoint, Trigger } from '../utils'

export const createAdditionalObjectsCopyLineUrls = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/copy-lines-for-additional-objects/import/{importId}',
  method: 'get',
  swaggerControllerName: 'additional-objects-module-copy-line-url-controller',
  trigger,
  description: 'Creates copy lines urls for Additional Objects Module in context of calculation line'
})
