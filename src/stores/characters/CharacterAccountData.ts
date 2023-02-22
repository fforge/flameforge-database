import { CHARACTER_ACCOUNT_DATA } from '#constants/characters'
import { CharacterAccountData } from '#models/characters/CharacterAccountData'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterAccountDataStore extends Core<CharacterAccountData> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterAccountData,
      store: data_source.getRepository(CHARACTER_ACCOUNT_DATA),
    })
  }
}