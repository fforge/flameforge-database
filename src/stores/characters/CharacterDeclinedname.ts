import { CHARACTER_DECLINEDNAME } from '#constants/characters'
import { CharacterDeclinedname } from '#models/characters/CharacterDeclinedname'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterDeclinednameStore extends Core<CharacterDeclinedname> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterDeclinedname,
      store: data_source.getRepository(CHARACTER_DECLINEDNAME),
    })
  }
}