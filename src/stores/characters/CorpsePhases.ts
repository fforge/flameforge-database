import { CORPSE_PHASES } from '#constants/characters'
import { CorpsePhases } from '#models/characters/CorpsePhases'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CorpsePhasesStore extends Core<CorpsePhases> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CorpsePhases,
      name: CORPSE_PHASES,
      store: data_source.getRepository(CORPSE_PHASES),
    })
  }
}