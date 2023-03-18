import { CHARACTER_QUESTSTATUS } from '#constants/characters'
import { CharacterQueststatus } from '#models/characters/CharacterQueststatus'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusStore extends Core<CharacterQueststatus> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterQueststatus,
      name: CHARACTER_QUESTSTATUS,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS),
    })
  }
}