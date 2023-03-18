import { CHARACTER_QUESTSTATUS_DAILY } from '#constants/characters'
import { CharacterQueststatusDaily } from '#models/characters/CharacterQueststatusDaily'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusDailyStore extends Core<CharacterQueststatusDaily> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterQueststatusDaily,
      name: CHARACTER_QUESTSTATUS_DAILY,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_DAILY),
    })
  }
}