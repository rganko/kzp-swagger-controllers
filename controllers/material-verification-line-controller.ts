import { Endpoint, Trigger } from '../utils'

export const editVerificationLineMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{verificationPositionId}/line/{verificationLineId}/material/{id}',
  method: 'put',
  swaggerControllerName: 'material-verification-line-controller',
  trigger,
  description: 'Edit material connected to verification line',
})

export const deleteVerificationLineMaterial = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{verificationPositionId}/line/{verificationLineId}/material/{id}',
  method: 'delete',
  swaggerControllerName: 'material-verification-line-controller',
  trigger,
  description: 'Delete material from verification line',
})
