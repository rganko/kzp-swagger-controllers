import { Endpoint, Trigger } from '../utils'

export const searchVorChangelog = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/vor/changelog',
  method: 'post',
  swaggerControllerName: 'vor-changelog-controller',
  trigger,
  description: 'Search VOR changelog entries'
})
