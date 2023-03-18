import { CHARACTER_HOMEBIND } from '#constants/characters'
import { CharacterHomebind } from '#models/characters/CharacterHomebind'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterHomebindStore extends Core<CharacterHomebind> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterHomebind,
      name: CHARACTER_HOMEBIND,
      store: data_source.getRepository(CHARACTER_HOMEBIND),
    })
  }
}