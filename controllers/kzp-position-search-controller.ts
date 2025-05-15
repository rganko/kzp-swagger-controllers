import { Endpoint, Trigger } from '../utils'

export const searchKzpPositionNumbers = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/kzp/position/position-no/search',
  method: 'post',
  swaggerControllerName: 'kzp-position-search-controller',
  trigger,
  description: 'List of positionNo'
})
