import { Endpoint, Trigger } from '../utils'

export const upsertBudgetData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/data',
  method: 'put',
  swaggerControllerName: 'budget-data-controller',
  trigger,
  description: 'Upsert budget data'
})

export const getBudgetData = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/data',
  method: 'post',
  swaggerControllerName: 'budget-data-controller',
  trigger,
  description: 'Get all data items for budget'
})

export const downloadBudgetData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/data/download',
  method: 'post',
  swaggerControllerName: 'budget-data-controller',
  trigger,
  description: 'Download budget data'
})

export const validateBudgetData = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/data/validate',
  method: 'post',
  swaggerControllerName: 'budget-data-controller',
  trigger,
  description: 'Validate budget data'
})

export const getBudgetDataValidationErrors = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/data/validation-errors',
  method: 'get',
  swaggerControllerName: 'budget-data-controller',
  trigger,
  description: 'Get budget data validation errors'
})
