import { Endpoint, Trigger } from '../utils'

export const getAcceptanceProtocolKzpLineCalculatedAmountInternal = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-calculated',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-internal-controller',
  trigger,
  description: 'Get summary from original amount from coopagreement\'s lines'
})

export const getAcceptanceProtocolKzpLineFixedAmountInternal = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-fixed',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-internal-controller',
  trigger,
  description: 'Get summary from fixed amount from coopagreement\'s lines'
})

export const getAcceptanceProtocolKzpLineReceivedAmountInternal = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-received',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-internal-controller',
  trigger,
  description: 'Get summary from received amount from coopagreement\'s lines'
})

export const getAcceptanceProtocolKzpLineAcceptedAmountInternal = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperation/agreement/{agreementId}/acceptance-protocol/{protocolId}/kzp-line/summary/amount-accepted',
  method: 'get',
  swaggerControllerName: 'acceptance-protocol-kzp-line-summary-internal-controller',
  trigger,
  description: 'Get summary from accepted amount from coopagreement\'s lines'
})
