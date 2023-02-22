import { CHARACTER_ACTION } from '#constants/characters'
import { CharacterAction } from '#models/characters/CharacterAction'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterActionStore extends Core<CharacterAction> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterAction,
      store: data_source.getRepository(CHARACTER_ACTION),
    })
  }
}