import { Document } from 'mongodb'
import { findUser } from '../db/user'

export async function getUser(id: number): Promise<Document | null> {
  return findUser(id)
}
