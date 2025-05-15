import { Endpoint, Trigger } from '../utils'

export const createBudgetSnapshot = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/snapshot',
  method: 'post',
  swaggerControllerName: 'budget-create-snapshot-controller',
  trigger,
  description: 'Create budget snapshot'
})
