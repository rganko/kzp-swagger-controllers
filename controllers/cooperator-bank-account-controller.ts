import { Endpoint, Trigger } from '../utils'

export const createCooperatorBankAccount = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperatorId}/bank-account',
  method: 'post',
  swaggerControllerName: 'cooperator-bank-account-controller',
  trigger,
  description: 'Adds new cooperator bank account'
})

export const updateCooperatorBankAccount = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperatorId}/bank-account/{bankAccountId}',
  method: 'put',
  swaggerControllerName: 'cooperator-bank-account-controller',
  trigger,
  description: 'Updates cooperator bank account'
})

export const deleteCooperatorBankAccount = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/cooperator/{cooperatorId}/bank-account/{bankAccountId}',
  method: 'delete',
  swaggerControllerName: 'cooperator-bank-account-controller',
  trigger,
  description: 'Deletes cooperant bank account'
})
