import { Endpoint, Trigger } from '../utils'

export const getDefaultPositionNumberAndSubpointValues = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/project/{projectId}/renumbering/defaults',
  method: 'post',
  swaggerControllerName: 'import-copy-positions-renumbering-controller',
  trigger,
  description: 'Get default position number and subpoint values for position copy'
})

export const validateTargetPositionNumberAndSubpointValues = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/import/copy-positions/project/{projectId}/renumbering/validate',
  method: 'post',
  swaggerControllerName: 'import-copy-positions-renumbering-controller',
  trigger,
  description: 'Validate target position number and subpoint values for position copy'
})
