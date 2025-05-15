import { Endpoint, Trigger } from '../utils'

export const getImportCopyMergePositionsConfig = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/copy-merge-positions/{importId}/config',
  method: 'get',
  swaggerControllerName: 'import-copy-merge-positions-controller',
  trigger,
  description: 'Get import copy merge positions config'
})

export const getImportCopyMergePositionsLineItems = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/import/copy-merge-positions/{importId}/items',
  method: 'get',
  swaggerControllerName: 'import-copy-merge-positions-controller',
  trigger,
  description: 'Get import copy merge positions line items'
})

export const copyMergePositionsToKzp = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/copy-merge-positions/project/{projectId}/kzp',
  method: 'post',
  swaggerControllerName: 'import-copy-merge-positions-controller',
  trigger,
  description: 'Copy merge positions to kzp'
})
