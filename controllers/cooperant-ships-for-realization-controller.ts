import { Endpoint, Trigger } from '../utils'

export const getShipsForRealizationListByCooperantPerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/internal/cooperant/person/{id}/ships-for-realization/list',
  method: 'post',
  swaggerControllerName: 'cooperant-ships-for-realization-controller',
  trigger,
  description: 'List of ships with offers by cooperant person'
})
