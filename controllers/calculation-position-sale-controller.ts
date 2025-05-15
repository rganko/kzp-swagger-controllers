import { Endpoint, Trigger } from '../utils'

export const addCalculationPositionSale = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale',
  method: 'post',
  swaggerControllerName: 'calculation-position-sale-controller',
  trigger,
  description: 'Adds new sale to given position'
})

export const getCalculationPositionSale = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale/{saleId}',
  method: 'get',
  swaggerControllerName: 'calculation-position-sale-controller',
  trigger,
  description: 'Gets calculation position sale'
})

export const deleteCalculationPositionSale = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale/{saleId}',
  method: 'delete',
  swaggerControllerName: 'calculation-position-sale-controller',
  trigger,
  description: 'Delete sale from position'
})

export const getCalculationPositionSales = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/position/{positionId}/sale',
  method: 'get',
  swaggerControllerName: 'calculation-position-sale-controller',
  trigger,
  description: 'Gets calculation position sales'
})
