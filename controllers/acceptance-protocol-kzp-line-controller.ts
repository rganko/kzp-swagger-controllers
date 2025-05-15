import { Endpoint, Trigger } from '../utils'

export const updateAcceptanceProtocolKzpLine = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/line/{lineId}',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-kzp-line-controller',
  trigger,
  description: 'Edit line under acceptance protocol'
})

export const confirmAcceptanceProtocolKzpLineFixedCost = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/line/{lineId}/confirm',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-kzp-line-controller',
  trigger,
  description: 'Confirm fixed cost on acceptance protocol kzp line'
})

export const unconfirmAcceptanceProtocolKzpLineFixedCost = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/line/{lineId}/unconfirm',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-kzp-line-controller',
  trigger,
  description: 'Unconfirm fixed cost on acceptance protocol kzp line'
})

export const confirmAllAcceptanceProtocolKzpLinesFixedCost = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/line/confirm',
  method: 'put',
  swaggerControllerName: 'acceptance-protocol-kzp-line-controller',
  trigger,
  description: 'Confirm fixed cost on all acceptance protocol kzplines'
})
