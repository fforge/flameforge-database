import { CHARACTER_QUESTSTATUS_WEEKLY } from '#constants/characters'
import { CharacterQueststatusWeekly } from '#models/characters/CharacterQueststatusWeekly'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusWeeklyStore extends Core<CharacterQueststatusWeekly> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterQueststatusWeekly,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_WEEKLY),
    })
  }
}