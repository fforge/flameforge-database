import { RESPAWN } from '#constants/characters'
import { Respawn } from '#models/characters/Respawn'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RespawnStore extends Core<Respawn> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Respawn,
      store: data_source.getRepository(RESPAWN),
    })
  }
}