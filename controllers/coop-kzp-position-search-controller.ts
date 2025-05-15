import { Endpoint, Trigger } from '../utils'

export const searchCoopKzpPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/kzp-position/search',
  method: 'post',
  swaggerControllerName: 'coop-kzp-position-search-controller',
  trigger,
  description: 'Searches for kzp positions for cooperation'
})
