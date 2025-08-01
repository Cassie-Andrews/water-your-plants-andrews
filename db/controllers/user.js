import User from '../models/User'
import dbConnect from './util/connection'

export async function create(username, password) {
  if (!(username && password))
    throw new Error('Must include username and password')

  await dbConnect()

  const user = await User.create({username, password})
  console.log(user)

  if (!user)
    throw new Error('Error inserting User')

  return user.toJSON()
}

