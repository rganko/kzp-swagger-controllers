import { Endpoint, Trigger } from '../utils'

export const getCoopOfferRequestChangelogDetails = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/changelog/{offerRequestId}/details/{revisionId}',
  method: 'get',
  swaggerControllerName: 'coop-offer-request-changelog-controller',
  trigger,
  description: 'Gets change details for specific revision'
})

export const searchCoopOfferRequestChangelogs = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/offer-request/changelog/{offerRequestId}/search',
  method: 'post',
  swaggerControllerName: 'coop-offer-request-changelog-controller',
  trigger,
  description: 'Searches for offer request changelog'
})
