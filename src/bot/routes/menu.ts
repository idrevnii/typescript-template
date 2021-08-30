import { Router } from 'telegraf'
import { IContext } from '../models'

export const menuRoute = new Router<IContext>(() => {
  return {
    route: 'unknown'
  }
})
