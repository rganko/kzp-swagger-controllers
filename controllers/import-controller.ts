import { Endpoint, Trigger } from '../utils'

export const getImportById = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/{importId}',
  method: 'get',
  swaggerControllerName: 'import-controller',
  trigger,
  description: 'Get import by id'
})
