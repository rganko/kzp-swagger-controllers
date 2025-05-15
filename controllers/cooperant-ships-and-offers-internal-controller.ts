import { Endpoint, Trigger } from '../utils'

export const getShipsAndOffersListByCooperantPerson = (trigger: Trigger = 'action'): Endpoint => ({
  path: '/api/project/rest/internal/cooperant/person/{id}/ships-and-offers/list',
  method: 'post',
  swaggerControllerName: 'cooperant-ships-and-offers-internal-controller',
  trigger,
  description: 'List of ships with offers by cooperant person'
})
