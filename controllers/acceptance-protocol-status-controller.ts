import { Endpoint, Trigger } from '../utils'

export const rejectFinalAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/final/reject',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-status-controller',
  trigger,
  description: 'Reject final acceptance protocol'
})

export const rejectPartialAcceptanceProtocol = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/partial/reject',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-status-controller',
  trigger,
  description: 'Reject partial acceptance protocol'
})
