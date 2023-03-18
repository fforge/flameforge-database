import { LOGS } from '#constants/auth'
import { Logs } from '#models/auth/Logs'
import { DataSource } from 'typeorm'
import Core from '#core'

export class LogsStore extends Core<Logs> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Logs,
      name: LOGS,
      store: data_source.getRepository(LOGS),
    })
  }
}