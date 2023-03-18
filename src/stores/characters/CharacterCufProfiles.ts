import { CHARACTER_CUF_PROFILES } from '#constants/characters'
import { CharacterCufProfiles } from '#models/characters/CharacterCufProfiles'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterCufProfilesStore extends Core<CharacterCufProfiles> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterCufProfiles,
      name: CHARACTER_CUF_PROFILES,
      store: data_source.getRepository(CHARACTER_CUF_PROFILES),
    })
  }
}