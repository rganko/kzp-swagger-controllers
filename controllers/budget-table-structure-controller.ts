import { Endpoint, Trigger } from '../utils'

export const getBudgetTableStructure = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/table',
  method: 'get',
  swaggerControllerName: 'budget-table-structure-controller',
  trigger,
  description: 'Get table structure for budget type'
})

export const getBudgetSnapshotTableStructure = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/snapshot/{snapshotBudgetId}/table',
  method: 'get',
  swaggerControllerName: 'budget-table-structure-controller',
  trigger,
  description: 'Get table structure for budget snapshot'
})
