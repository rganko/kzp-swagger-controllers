import { Endpoint, Trigger } from '../utils'

export const getBudgetCurrencySales = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale',
  method: 'get',
  swaggerControllerName: 'budget-currency-sale-controller',
  trigger,
  description: 'Get all currency sales for budget'
})

export const upsertBudgetCurrencySale = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale',
  method: 'put',
  swaggerControllerName: 'budget-currency-sale-controller',
  trigger,
  description: 'Upsert budget currency sale'
})

export const deleteBudgetCurrencySale = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale/{saleId}',
  method: 'delete',
  swaggerControllerName: 'budget-currency-sale-controller',
  trigger,
  description: 'Delete budget currency sale'
})
