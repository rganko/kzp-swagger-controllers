import { Endpoint, Trigger } from '../utils'

export const getCooperantChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/changelog/{cooperantId}/details/{revisionId}',
  method: 'get',
  swaggerControllerName: 'cooperant-changelog-controller',
  trigger,
  description: 'Gets change details for specific revision'
})

export const searchCooperantChangelogs = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperant/changelog/{cooperantId}/search',
  method: 'post',
  swaggerControllerName: 'cooperant-changelog-controller',
  trigger,
  description: 'Searches for cooperant changelog'
})
