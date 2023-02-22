import { BATTLEGROUND_DESERTERS } from '#constants/characters'
import { BattlegroundDeserters } from '#models/characters/BattlegroundDeserters'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BattlegroundDesertersStore extends Core<BattlegroundDeserters> {
  constructor (data_source: DataSource) {
    super({
      model: new BattlegroundDeserters,
      store: data_source.getRepository(BATTLEGROUND_DESERTERS),
    })
  }
}