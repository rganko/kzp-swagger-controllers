import { Endpoint, Trigger } from '../utils'

export const addCooperantOfferRequestQuestion = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-requests/{offerRequestId}/questions',
  method: 'post',
  swaggerControllerName: 'cooperant-offer-request-questions-internal-controller',
  trigger,
  description: 'Add cooperant question for offer request'
})

export const getCooperantOfferRequestQuestionsList = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{cooperantPersonId}/offer-requests/{offerRequestId}/questions/list',
  method: 'get',
  swaggerControllerName: 'cooperant-offer-request-questions-internal-controller',
  trigger,
  description: 'Get coop offer request questions list'
})
