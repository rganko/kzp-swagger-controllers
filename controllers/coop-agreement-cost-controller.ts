import { Endpoint, Trigger } from '../utils'

export const getCoopAgreementCost = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/agreement/{id}/cost',
  method: 'get',
  swaggerControllerName: 'coop-agreement-cost-controller',
  trigger,
  description: 'Get cost under agreement'
})
