import { Endpoint, Trigger } from '../utils'

export const searchCooperantAgreementInvoices = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/internal/cooperant/person/{personId}/agreement/{agreementId}/invoice/search',
  method: 'post',
  swaggerControllerName: 'cooperant-invoice-internal-controller',
  trigger,
  description: 'Search agreement invoices'
})
