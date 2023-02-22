import { CORPSE_PHASES } from '#constants/characters'
import { CorpsePhases } from '#models/characters/CorpsePhases'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CorpsePhasesStore extends Core<CorpsePhases> {
  constructor (data_source: DataSource) {
    super({
      model: new CorpsePhases,
      store: data_source.getRepository(CORPSE_PHASES),
    })
  }
}