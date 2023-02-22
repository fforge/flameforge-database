import { LOGS } from '#constants/auth'
import { Logs } from '#models/auth/Logs'
import { DataSource } from 'typeorm'
import Core from '#core'

export class LogsStore extends Core<Logs> {
  constructor (data_source: DataSource) {
    super({ model: new Logs, store: data_source.getRepository(LOGS) })
  }
}