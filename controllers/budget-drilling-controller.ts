import { Endpoint, Trigger } from '../utils'

export const getBudgetDrillingAgreements = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/agreements',
  method: 'post',
  swaggerControllerName: 'budget-drilling-controller',
  trigger,
  description: 'Get drilling data about agreements'
})

export const getBudgetDrillingInvoice = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/invoice/row-type/{rowType}',
  method: 'get',
  swaggerControllerName: 'budget-drilling-controller',
  trigger,
  description: 'Get drilling data about invoice'
})

export const getBudgetDrillingPhases = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/phases',
  method: 'get',
  swaggerControllerName: 'budget-drilling-controller',
  trigger,
  description: 'Get drilling data about phases'
})

export const getBudgetDrillingPositions = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/drilling/position',
  method: 'post',
  swaggerControllerName: 'budget-drilling-controller',
  trigger,
  description: 'Get drilling data about positions'
})
