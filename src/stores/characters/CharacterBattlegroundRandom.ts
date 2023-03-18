import { CHARACTER_BATTLEGROUND_RANDOM } from '#constants/characters'
import { CharacterBattlegroundRandom } from '#models/characters/CharacterBattlegroundRandom'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterBattlegroundRandomStore extends Core<CharacterBattlegroundRandom> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterBattlegroundRandom,
      name: CHARACTER_BATTLEGROUND_RANDOM,
      store: data_source.getRepository(CHARACTER_BATTLEGROUND_RANDOM),
    })
  }
}