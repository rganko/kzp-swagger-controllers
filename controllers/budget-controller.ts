import { Endpoint, Trigger } from '../utils'

export const approveBudget = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/approve',
  method: 'put',
  swaggerControllerName: 'budget-controller',
  trigger,
  description: 'Approve budget'
})

export const getBudgetFinancialSummary = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/financial-summary',
  method: 'post',
  swaggerControllerName: 'budget-controller',
  trigger,
  description: 'Get budget parent with subordinates'
})

export const getBudgetInfo = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/info',
  method: 'get',
  swaggerControllerName: 'budget-controller',
  trigger,
  description: 'Get budget info'
})

export const saveBudget = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/save',
  method: 'post',
  swaggerControllerName: 'budget-controller',
  trigger,
  description: 'Save budget'
})
