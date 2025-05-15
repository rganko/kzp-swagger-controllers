import { Endpoint, Trigger } from '../utils'

export const callbackAdditionalObjectsCopyLineUrls = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/copy-lines/callback/id/{idOfCopyLineOperation}',
  method: 'post',
  swaggerControllerName: 'additional-objects-module-copy-line-callback-controller',
  trigger,
  description: 'Callback for additional objects module after copy line'
})

export const copyAdditionalObjectsLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/external/additional-objects/copy-lines/callback/id/{idOfCopyLineOperation}/copy',
  method: 'post',
  swaggerControllerName: 'additional-objects-module-copy-line-callback-controller',
  trigger,
  description: 'Copy line in additional objects module'
})
