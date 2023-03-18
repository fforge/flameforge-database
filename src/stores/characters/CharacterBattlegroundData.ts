import { CHARACTER_BATTLEGROUND_DATA } from '#constants/characters'
import { CharacterBattlegroundData } from '#models/characters/CharacterBattlegroundData'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterBattlegroundDataStore extends Core<CharacterBattlegroundData> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterBattlegroundData,
      name: CHARACTER_BATTLEGROUND_DATA,
      store: data_source.getRepository(CHARACTER_BATTLEGROUND_DATA),
    })
  }
}