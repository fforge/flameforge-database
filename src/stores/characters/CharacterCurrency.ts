import { CHARACTER_CURRENCY } from '#constants/characters'
import { CharacterCurrency } from '#models/characters/CharacterCurrency'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterCurrencyStore extends Core<CharacterCurrency> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterCurrency,
      name: CHARACTER_CURRENCY,
      store: data_source.getRepository(CHARACTER_CURRENCY),
    })
  }
}