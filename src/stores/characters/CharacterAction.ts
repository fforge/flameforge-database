import { CHARACTER_ACTION } from '#constants/characters'
import { CharacterAction } from '#models/characters/CharacterAction'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterActionStore extends Core<CharacterAction> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterAction,
      name: CHARACTER_ACTION,
      store: data_source.getRepository(CHARACTER_ACTION),
    })
  }
}