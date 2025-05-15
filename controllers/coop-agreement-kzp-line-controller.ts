import { Endpoint, Trigger } from '../utils'

export const getCoopAgreementKzpLineCost = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/kzp-line/cost',
  method: 'get',
  swaggerControllerName: 'coop-agreement-kzp-line-controller',
  trigger,
  description: 'Get cost under kzp lines under agreement'
})

export const searchCoopAgreementKzpLines = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{agreementId}/kzp-line/search',
  method: 'post',
  swaggerControllerName: 'coop-agreement-kzp-line-controller',
  trigger,
  description: 'Search kzp lines under agreement'
})
