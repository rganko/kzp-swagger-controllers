import { Endpoint, Trigger } from '../utils'

export const searchWorkloadValuationLineChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/workload-valuation/line/changelog',
  method: 'post',
  swaggerControllerName: 'workload-valuation-line-changelog-controller',
  trigger,
  description: 'Search workload valuation line changelog'
})
