import { Endpoint, Trigger } from '../utils'

export const getMobileInspectionPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/mobile/inspection/user/{userId}/project/{projectId}/position/list',
  method: 'get',
  swaggerControllerName: 'mobile-inspection-positions-internal-controller',
  trigger,
  description: 'List of positions in given project for mobile user'
})
