import { initBot } from './bot/app'
import { initDb } from './db/init'

async function start() {
  await initDb()
  await initBot()
}

start()
