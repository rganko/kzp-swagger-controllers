import { Endpoint, Trigger } from '../utils'

export const getCoopInvoice = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/coop-agreement/{agreementId}/coop-invoices/{id}',
  method: 'get',
  swaggerControllerName: 'coop-invoice-controller',
  trigger,
  description: 'Get coop invoice by id'
})

export const searchCoopInvoices = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/coop-agreement/{agreementId}/coop-invoices/search',
  method: 'post',
  swaggerControllerName: 'coop-invoice-controller',
  trigger,
  description: 'Search for coop invoices'
})
