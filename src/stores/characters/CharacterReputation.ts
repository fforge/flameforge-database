import { CHARACTER_REPUTATION } from '#constants/characters'
import { CharacterReputation } from '#models/characters/CharacterReputation'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterReputationStore extends Core<CharacterReputation> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterReputation,
      store: data_source.getRepository(CHARACTER_REPUTATION),
    })
  }
}