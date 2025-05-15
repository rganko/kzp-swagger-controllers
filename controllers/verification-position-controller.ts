import { Endpoint, Trigger } from '../utils'

export const getVerificationPositionById = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}',
  method: 'get',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'Get verification position by id',
})

export const updateVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}',
  method: 'put',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'Update verification position by id',
})

export const deletePosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}',
  method: 'delete',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'Removes verification position',
})

export const twApproveVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}/tw-approve',
  method: 'put',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'TW-approving of verification position and creates kzp lines from verification lines',
})

export const nwDisapproveVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}/nw-disapprove',
  method: 'put',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'NW-disapproving of verification position',
})

export const nwApproveVerificationPosition = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/verification/position/{id}/nw-approve',
  method: 'put',
  swaggerControllerName: 'verification-position-controller',
  trigger,
  description: 'NW-approving of verification position',
})
