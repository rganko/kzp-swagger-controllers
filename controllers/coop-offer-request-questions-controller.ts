import { Endpoint, Trigger } from '../utils'

export const answerCoopOfferRequestQuestions = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{offerRequestId}/questions/answer',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-questions-controller',
  trigger,
  description: 'Answer cooperant questions'
})

export const getCoopOfferRequestQuestionsList = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/{offerRequestId}/questions/list',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-questions-controller',
  trigger,
  description: 'Get coop offer request cooperant questions list'
})
