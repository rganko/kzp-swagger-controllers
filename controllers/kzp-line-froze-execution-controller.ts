import { Endpoint, Trigger } from '../utils'

/**
 * Makes cooperation execution read only for a KZP line
 */
export const frozeKzpLineExecution = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/line/{lineId}/froze-execution',
  method: 'put',
  swaggerControllerName: 'kzp-line-froze-execution-controller',
  trigger,
  description: 'Make cooperation execution read only for line'
})
