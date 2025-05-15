import { Endpoint, Trigger } from '../utils'

export const getTaskTrackerTasks = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/task-tracker/project/{projectId}/task',
  method: 'get',
  swaggerControllerName: 'task-tracker-controller',
  trigger,
  description: 'Get task tracker tasks'
})
