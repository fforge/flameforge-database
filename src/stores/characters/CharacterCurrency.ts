import { CHARACTER_CURRENCY } from '#constants/characters'
import { CharacterCurrency } from '#models/characters/CharacterCurrency'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterCurrencyStore extends Core<CharacterCurrency> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterCurrency,
      store: data_source.getRepository(CHARACTER_CURRENCY),
    })
  }
}