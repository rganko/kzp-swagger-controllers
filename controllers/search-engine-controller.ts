import { Endpoint, Trigger } from '../utils'

export const searchEngineSearch = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/search/search',
  method: 'post',
  swaggerControllerName: 'search-engine-controller',
  trigger,
  description: 'Search using search engine'
})
