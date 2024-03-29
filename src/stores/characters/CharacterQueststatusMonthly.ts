import { CHARACTER_QUESTSTATUS_MONTHLY } from '#constants/characters'
import { CharacterQueststatusMonthly } from '#models/characters/CharacterQueststatusMonthly'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusMonthlyStore extends Core<CharacterQueststatusMonthly> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterQueststatusMonthly,
      name: CHARACTER_QUESTSTATUS_MONTHLY,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_MONTHLY),
    })
  }
}