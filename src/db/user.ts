import { DeleteResult, Document, InsertOneResult, UpdateResult } from 'mongodb'
import { users } from './init'

export async function insertUser(
  id: number
): Promise<InsertOneResult<Document>> {
  return users.insertOne({ id })
}

export async function findUser(id: number): Promise<Document | null> {
  return users.findOne({ id })
}

export async function updateUser(
  id: number,
  props: Record<string, unknown>
): Promise<UpdateResult> {
  return users.updateOne({ id }, { $set: props })
}

export async function deleteUser(id: number): Promise<DeleteResult> {
  return users.deleteOne({ id })
}
