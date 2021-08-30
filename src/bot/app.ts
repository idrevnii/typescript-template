import Telegraf from 'telegraf'
import { BOT_TOKEN } from '../config'
import { IContext } from './models'
import { startRoute } from './routes/start'

export async function initBot(): Promise<void> {
  const bot = new Telegraf<IContext>(BOT_TOKEN)

  bot.on('message', startRoute)

  bot.catch((err: unknown) => console.error(err))

  return bot.launch()
}
