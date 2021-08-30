import { Collection, MongoClient } from 'mongodb'
import { MONGO_URL } from '../config'

const client = new MongoClient(MONGO_URL)

export let users: Collection

export async function initDb(): Promise<void> {
  await client.connect()
  console.log('Successfully connected to MongoDB server!')
  const db = client.db('merchant')
  users = db.collection('users')
}
