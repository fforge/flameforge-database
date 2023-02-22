import { WARDEN_ACTION } from '#constants/characters'
import { WardenAction } from '#models/characters/WardenAction'
import { DataSource } from 'typeorm'
import Core from '#core'

export class WardenActionStore extends Core<WardenAction> {
  constructor (data_source: DataSource) {
    super({
      model: new WardenAction,
      store: data_source.getRepository(WARDEN_ACTION),
    })
  }
}