import { Endpoint, Trigger } from '../utils'

export const getImportCopyPositionsConfig = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/{importId}/config',
  method: 'get',
  swaggerControllerName: 'import-copy-positions-controller',
  trigger,
  description: 'Get import copy positions config'
})

export const getImportCopyPositionsLineItems = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/{importId}/items',
  method: 'get',
  swaggerControllerName: 'import-copy-positions-controller',
  trigger,
  description: 'Get import by id'
})

export const copyPositionsToCalculation = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/project/{projectId}/calculation/{calculationId}',
  method: 'post',
  swaggerControllerName: 'import-copy-positions-controller',
  trigger,
  description: 'Copy positions to calculation'
})

export const copyPositionsToKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/project/{projectId}/kzp',
  method: 'post',
  swaggerControllerName: 'import-copy-positions-controller',
  trigger,
  description: 'Copy positions to kzp'
})
