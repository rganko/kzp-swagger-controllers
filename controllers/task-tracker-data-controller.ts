import { Endpoint, Trigger } from '../utils'

export const getTaskTrackerData = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/task-tracker/project/{projectId}/data',
  method: 'get',
  swaggerControllerName: 'task-tracker-data-controller',
  trigger,
  description: 'Get task tracker data'
})
