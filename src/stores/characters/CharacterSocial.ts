import { CHARACTER_SOCIAL } from '#constants/characters'
import { CharacterSocial } from '#models/characters/CharacterSocial'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSocialStore extends Core<CharacterSocial> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterSocial,
      store: data_source.getRepository(CHARACTER_SOCIAL),
    })
  }
}