import { Endpoint, Trigger } from '../utils'

export const getBudgetSnapshotCurrencySale = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/snapshot/{budgetId}/currency-sale',
  method: 'get',
  swaggerControllerName: 'budget-snapshot-controller',
  trigger,
  description: 'Get budget snapshot currency sale data for primal snapshot for requested budget'
})

export const getBudgetSnapshot = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/snapshot/{budgetSnapshotId}',
  method: 'get',
  swaggerControllerName: 'budget-snapshot-controller',
  trigger,
  description: 'Get budget snapshot data for table'
})

export const getBudgetSnapshots = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/snapshots',
  method: 'get',
  swaggerControllerName: 'budget-snapshot-controller',
  trigger,
  description: 'Get list of snapshots'
})

export const deleteBudgetSnapshot = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/snapshot/{budgetSnapshotId}',
  method: 'delete',
  swaggerControllerName: 'budget-snapshot-controller',
  trigger,
  description: 'Delete budget snapshot'
})
