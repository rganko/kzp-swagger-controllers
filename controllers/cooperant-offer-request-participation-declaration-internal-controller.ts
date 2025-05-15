import { Endpoint, Trigger } from '../utils'

export const declareCooperantOfferRequestParticipation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-request/{offerRequestId}/declaration/participate',
  method: 'put',
  swaggerControllerName: 'cooperant-offer-request-participation-declaration-internal-controller',
  trigger,
  description: 'Declare participation in offer request'
})

export const declareCooperantOfferRequestResignation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-request/{offerRequestId}/declaration/resignation',
  method: 'put',
  swaggerControllerName: 'cooperant-offer-request-participation-declaration-internal-controller',
  trigger,
  description: 'Resign form participation in offer request'
})

export const getCooperantOfferRequestDeclarationStatus = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-request/{offerRequestId}/declaration/status',
  method: 'get',
  swaggerControllerName: 'cooperant-offer-request-participation-declaration-internal-controller',
  trigger,
  description: 'Get participation declaration status'
})
