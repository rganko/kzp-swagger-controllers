import { Endpoint, Trigger } from '../utils'

export const searchSimpleKzpLinePackages = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/line-package/list/simple',
  method: 'post',
  swaggerControllerName: 'kzp-line-package-search-controller',
  trigger,
  description: 'Search for simple kzp line packages'
})

export const searchKzpLinePackagesList = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/line-package/list',
  method: 'post',
  swaggerControllerName: 'kzp-line-package-search-controller',
  trigger,
  description: 'Search for kzp line packages'
})
