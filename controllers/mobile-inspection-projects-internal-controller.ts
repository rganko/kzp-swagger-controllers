import { Endpoint, Trigger } from '../utils'

export const getMobileInspectionProjects = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/mobile/inspection/user/{userId}/project/list',
  method: 'get',
  swaggerControllerName: 'mobile-inspection-projects-internal-controller',
  trigger,
  description: 'List of projects for mobile user'
})
