import { AUTOBROADCAST } from '#constants/auth'
import { Autobroadcast } from '#models/auth/Autobroadcast'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AutobroadcastStore extends Core<Autobroadcast> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Autobroadcast,
      name: AUTOBROADCAST,
      store: data_source.getRepository(AUTOBROADCAST),
    })
  }
}