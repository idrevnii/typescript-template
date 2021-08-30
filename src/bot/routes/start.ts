import { Router } from 'telegraf'
import { getUser } from '../../core/user'
import { IContext } from '../models'
import { menuRoute } from './menu'

export const startRoute = new Router<IContext>(async ({ from }) => {
  if (from?.id) {
    const user = await getUser(from.id)
    if (user) {
      return {
        route: 'known_user',
        state: { user }
      }
    } else {
      return {
        route: 'unknown_user'
      }
    }
  } else {
    return {
      route: 'unknown'
    }
  }
})

startRoute.on('known_user', menuRoute)

startRoute.on('unknown_user', ({ reply }) => {
  reply('Start message')
})

startRoute.on('unknown', ({ reply }) => {
  reply('Something strange happens')
  console.log('Start route throws unknown route')
})
