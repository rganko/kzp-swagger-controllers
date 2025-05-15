import { Endpoint, Trigger } from '../utils'

export const createKzpLinePackage = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-package',
  method: 'post',
  swaggerControllerName: 'kzp-line-package-controller',
  trigger,
  description: 'Adds new kzp line package'
})

export const getKzpLinePackageById = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-package/{linePackageId}',
  method: 'get',
  swaggerControllerName: 'kzp-line-package-controller',
  trigger,
  description: 'Gets kzp line package by id'
})

export const updateKzpLinePackage = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-package/{linePackageId}',
  method: 'put',
  swaggerControllerName: 'kzp-line-package-controller',
  trigger,
  description: 'Updates kzp line package'
})

export const searchKzpLinePackages = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line-package/search',
  method: 'post',
  swaggerControllerName: 'kzp-line-package-controller',
  trigger,
  description: 'Search for kzp line packages'
})
