import { Endpoint, Trigger } from '../utils'

export const getBoardResolutionChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/board-resolution-changelog/{boardResolutionId}',
  method: 'get',
  swaggerControllerName: 'board-resolution-changelog-controller',
  trigger,
  description: 'Get board resolution changelog'
})
