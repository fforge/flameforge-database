import { CHARACTER_QUESTSTATUS_SEASONAL } from '#constants/characters'
import { CharacterQueststatusSeasonal } from '#models/characters/CharacterQueststatusSeasonal'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusSeasonalStore extends Core<CharacterQueststatusSeasonal> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterQueststatusSeasonal,
      name: CHARACTER_QUESTSTATUS_SEASONAL,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_SEASONAL),
    })
  }
}