import { AUTH_UPDATES } from '#constants/auth'
import { Updates } from '#models/auth/Updates'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AuthUpdatesStore extends Core<Updates> {
  constructor (data_source: DataSource) {
    super({ model: new Updates, store: data_source.getRepository(AUTH_UPDATES) })
  }
}