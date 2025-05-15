import { Endpoint, Trigger } from '../utils'

/**
 * Search for KZP lines for material copy functionality
 */
export const searchKzpLinesForMaterialCopy = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/search-for-material-copy',
  method: 'post',
  swaggerControllerName: 'kzp-line-for-material-copy-controller',
  trigger,
  description: 'Search for kzp lines'
})
