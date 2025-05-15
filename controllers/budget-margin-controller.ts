import { Endpoint, Trigger } from '../utils'

export const calculateBudgetMargin = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/margin',
  method: 'post',
  swaggerControllerName: 'budget-margin-controller',
  trigger,
  description: 'Calculate margin table data'
})
