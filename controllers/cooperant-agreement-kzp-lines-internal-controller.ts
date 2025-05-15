import { Endpoint, Trigger } from '../utils'

export const markCooperantAgreementLinesReadyForReception = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/lines/mark-ready-for-reception',
  method: 'post',
  swaggerControllerName: 'cooperant-agreement-kzp-lines-internal-controller',
  trigger,
  description: 'Mark ready for agreement lines'
})

export const searchCooperantAgreementLines = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/lines/search',
  method: 'post',
  swaggerControllerName: 'cooperant-agreement-kzp-lines-internal-controller',
  trigger,
  description: 'Search agreement lines'
})
