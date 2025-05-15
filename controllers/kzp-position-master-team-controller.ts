import { Endpoint, Trigger } from '../utils'

export const getMasterTeam = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/master-team',
  method: 'get',
  swaggerControllerName: 'kzp-position-master-team-controller',
  trigger,
  description: 'Get master team with work ration under kzp position'
})

export const addMasterTeam = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/kzp/position/{positionId}/master-team',
  method: 'put',
  swaggerControllerName: 'kzp-position-master-team-controller',
  trigger,
  description: 'Adds master team with work ration to kzp position'
})
