import { Endpoint, Trigger } from '../utils'

export const createPartialAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/partial',
  method: 'post',
  swaggerControllerName: 'acceptance-protocol-partial-controller',
  trigger,
  description: 'Create partial acceptance protocol under agreement'
})

export const updatePartialAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/partial/{id}',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-partial-controller',
  trigger,
  description: 'Edit partial acceptance protocol under agreement'
})
