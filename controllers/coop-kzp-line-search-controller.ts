import { Endpoint, Trigger } from '../utils'

export const searchCoopKzpLines = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-line/search',
  method: 'post',
  swaggerControllerName: 'coop-kzp-line-search-controller',
  trigger,
  description: 'Searches for kzp lines for cooperation'
})
