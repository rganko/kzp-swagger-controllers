import { Endpoint, Trigger } from '../utils'

export const getAcceptanceProtocolKzpLineCalculatedAmount = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-calculated',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-controller',
  trigger,
  description: 'Get summary from original amount from coopAgreement\'s lines'
})

export const getAcceptanceProtocolKzpLineFixedAmount = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-fixed',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-controller',
  trigger,
  description: 'Get summary from fixed amount from coopAgreement\'s lines'
})

export const getAcceptanceProtocolKzpLineReceivedAmount = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-received',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-controller',
  trigger,
  description: 'Get summary from received amount from coopAgreement\'s lines'
})

export const getAcceptanceProtocolKzpLineAcceptedAmount = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-accepted',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-controller',
  trigger,
  description: 'Get summary from accepted amount from coopAgreement\'s lines'
})
