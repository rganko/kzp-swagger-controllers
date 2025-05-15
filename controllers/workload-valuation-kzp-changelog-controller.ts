import { Endpoint, Trigger } from '../utils'

export const searchWorkloadValuationKzpChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/kzp/changelog',
  method: 'post',
  swaggerControllerName: 'workload-valuation-kzp-changelog-controller',
  trigger,
  description: 'Search workload valuation KZP changelog'
})
