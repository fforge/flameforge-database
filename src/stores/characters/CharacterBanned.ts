import { CHARACTER_BANNED } from '#constants/characters'
import { CharacterBanned } from '#models/characters/CharacterBanned'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterBannedStore extends Core<CharacterBanned> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterBanned,
      store: data_source.getRepository(CHARACTER_BANNED),
    })
  }
}