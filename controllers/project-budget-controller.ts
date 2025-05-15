import { Endpoint, Trigger } from '../utils'

export const searchProjectBudgets = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget',
  method: 'get',  
  swaggerControllerName: 'project-budget-controller',
  trigger,
  description: 'Get all budget types for project'
})
