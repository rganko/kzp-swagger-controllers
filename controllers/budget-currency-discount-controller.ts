import { Endpoint, Trigger } from '../utils'

export const getBudgetCurrencyDiscount = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/budget/currency/discount',
  method: 'get',
  swaggerControllerName: 'budget-currency-discount-controller',
  trigger,
  description: 'Get budget currency discount'
})

export const updateBudgetCurrencyDiscount = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/budget/currency/discount',
  method: 'put',
  swaggerControllerName: 'budget-currency-discount-controller',
  trigger,
  description: 'Update budget currency discount'
})
