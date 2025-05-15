import { Endpoint, Trigger } from '../utils'

export const getBudgetTransitionalTableData = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/transitional-table-data',
  method: 'get',
  swaggerControllerName: 'budget-transitional-table-controller',
  trigger,
  description: 'Get transitional table for budget data'
})

export const getBudgetTransitionalTableHistory = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/transitional-table-history',
  method: 'get',
  swaggerControllerName: 'budget-transitional-table-controller',
  trigger,
  description: 'Get transitional table history of budget approving'
})
