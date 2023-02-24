import { CHARACTER_INSTANCE } from '#constants/characters'
import { CharacterInstance } from '#models/characters/CharacterInstance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterInstanceStore extends Core<CharacterInstance> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterInstance,
      store: data_source.getRepository(CHARACTER_INSTANCE),
    })
  }
}