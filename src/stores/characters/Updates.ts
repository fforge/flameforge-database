import { CHARACTERS_UPDATES } from '#constants/characters'
import { Updates } from '#models/characters/Updates'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharactersUpdatesStore extends Core<Updates> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Updates,
      name: CHARACTERS_UPDATES,
      store: data_source.getRepository(CHARACTERS_UPDATES),
    })
  }
}