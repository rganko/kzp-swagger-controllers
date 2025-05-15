import { Endpoint, Trigger } from '../utils'

export const getBudgetCurrencies = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/currency',
  method: 'get',
  swaggerControllerName: 'budget-currency-controller',
  trigger,
  description: 'Get all currencies for project budget'
})
