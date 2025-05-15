import { Endpoint, Trigger } from '../utils'

export const addTaskTrackerProjectComment = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/task-tracker/project/{projectId}/comment',
  method: 'post',
  swaggerControllerName: 'task-tracker-project-comment-controller',
  trigger,
  description: 'Add task tracker project comment'
})
