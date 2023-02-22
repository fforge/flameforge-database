import { UPTIME } from '#constants/auth'
import { Uptime } from '#models/auth/Uptime'
import { DataSource } from 'typeorm'
import Core from '#core'

export class UptimeStore extends Core<Uptime> {
  constructor (data_source: DataSource) {
    super({ model: new Uptime, store: data_source.getRepository(UPTIME) })
  }
}