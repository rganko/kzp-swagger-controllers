import { Endpoint, Trigger } from '../utils'

export const createBudgetCurrencySaleDetail = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale/{saleId}/detail',
  method: 'post',
  swaggerControllerName: 'budget-currency-sale-detail-controller',
  trigger,
  description: 'Create budget currency sale detail'
})

export const updateBudgetCurrencySaleDetail = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale/{saleId}/detail/{detailId}',
  method: 'put',
  swaggerControllerName: 'budget-currency-sale-detail-controller',
  trigger,
  description: 'Update budget currency sale detail'
})

export const getBudgetCurrencySaleDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale/{saleId}/detail',
  method: 'get',
  swaggerControllerName: 'budget-currency-sale-detail-controller',
  trigger,
  description: 'Get all budget currency sale details'
})

export const deleteBudgetCurrencySaleDetail = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/project/{projectId}/budget/{budgetId}/sale/{saleId}/detail/{detailId}',
  method: 'delete',
  swaggerControllerName: 'budget-currency-sale-detail-controller',
  trigger,
  description: 'Delete budget currency sale detail'
})
