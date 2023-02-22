import { CHARACTER_QUESTSTATUS_SEASONAL } from '#constants/characters'
import { CharacterQueststatusSeasonal } from '#models/characters/CharacterQueststatusSeasonal'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusSeasonalStore extends Core<CharacterQueststatusSeasonal> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterQueststatusSeasonal,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_SEASONAL),
    })
  }
}