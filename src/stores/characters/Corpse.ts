import { CORPSE } from '#constants/characters'
import { Corpse } from '#models/characters/Corpse'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CorpseStore extends Core<Corpse> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Corpse,
      name: CORPSE,
      store: data_source.getRepository(CORPSE),
    })
  }
}