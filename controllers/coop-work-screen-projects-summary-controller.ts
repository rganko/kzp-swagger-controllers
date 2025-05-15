import { Endpoint, Trigger } from '../utils'

export const searchCoopWorkScreenProjectsSummary = (trigger: Trigger = 'onload'): Endpoint => ({
  path: '/api/project/rest/cooperation/project/summary/search',
  method: 'post',
  swaggerControllerName: 'coop-work-screen-projects-summary-controller',
  trigger,
  description: 'Searches for project summary for coop work screen'
})
