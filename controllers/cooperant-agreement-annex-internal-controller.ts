import { Endpoint, Trigger } from '../utils'

export const searchCooperantAgreementAnnexes = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/annex',
  method: 'post',
  swaggerControllerName: 'cooperant-agreement-annex-internal-controller',
  trigger,
  description: 'Search agreement annexes'
})
