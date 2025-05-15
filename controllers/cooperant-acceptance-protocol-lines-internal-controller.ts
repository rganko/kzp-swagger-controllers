import { Endpoint, Trigger } from '../utils'

export const approveCooperantAcceptanceProtocolLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{protocolId}/lines/{lineId}/approve',
  method: 'put',
  swaggerControllerName: 'cooperant-acceptance-protocol-lines-internal-controller',
  trigger,
  description: 'Approve decreasing line by cooperant'
})

export const denyCooperantAcceptanceProtocolLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{protocolId}/lines/{lineId}/deny',
  method: 'put',
  swaggerControllerName: 'cooperant-acceptance-protocol-lines-internal-controller',
  trigger,
  description: 'Deny decreasing line by cooperant'
})

export const getCooperantAcceptanceProtocolLines = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/acceptance-protocol/{protocolId}/lines',
  method: 'get',
  swaggerControllerName: 'cooperant-acceptance-protocol-lines-internal-controller',
  trigger,
  description: 'Get acceptance protocol lines'
})
