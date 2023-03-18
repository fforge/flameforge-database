import { CHARACTERS } from '#constants/characters'
import { Characters } from '#models/characters/Characters'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharactersStore extends Core<Characters> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Characters,
      name: CHARACTERS,
      store: data_source.getRepository(CHARACTERS),
    })
  }
}