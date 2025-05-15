import { Endpoint, Trigger } from '../utils'

export const updateCooperatorAdditionalInformation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{id}/additional-information',
  method: 'put',
  swaggerControllerName: 'cooperator-additional-information-controller',
  trigger,
  description: 'Updates cooperant additional information'
})
