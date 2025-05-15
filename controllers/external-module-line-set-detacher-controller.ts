import { Endpoint, Trigger } from '../utils'

export const detachExternalModuleCalculationLinesSet = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/detach-external-module-lines/project/{projectId}/calculation/{calculationId}/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-module-line-set-detacher-controller',
  trigger,
  description: 'Detach external module calculation lines set'
})

export const detachExternalModuleKzpLinesSet = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/detach-external-module-lines/project/{projectId}/kzp/position/{positionId}/line/{lineId}',
  method: 'post',
  swaggerControllerName: 'external-module-line-set-detacher-controller',
  trigger,
  description: 'Detach external module kzp lines set'
})
