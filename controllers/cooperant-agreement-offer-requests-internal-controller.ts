import { Endpoint, Trigger } from '../utils'

export const searchCooperantAgreementOfferRequests = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/agreement/{agreementId}/offer-requests/search',
  method: 'post',
  swaggerControllerName: 'cooperant-agreement-offer-requests-internal-controller',
  trigger,
  description: 'search offer requests for agreement'
})
