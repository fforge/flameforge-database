import { PVPSTATS_BATTLEGROUNDS } from '#constants/characters'
import { PvpstatsBattlegrounds } from '#models/characters/PvpstatsBattlegrounds'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PvpstatsBattlegroundsStore extends Core<PvpstatsBattlegrounds> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: PvpstatsBattlegrounds,
      name: PVPSTATS_BATTLEGROUNDS,
      store: data_source.getRepository(PVPSTATS_BATTLEGROUNDS),
    })
  }
}