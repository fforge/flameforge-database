import { CHARACTER_GIFTS } from '#constants/characters'
import { CharacterGifts } from '#models/characters/CharacterGifts'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterGiftsStore extends Core<CharacterGifts> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterGifts,
      store: data_source.getRepository(CHARACTER_GIFTS),
    })
  }
}