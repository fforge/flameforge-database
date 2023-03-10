import { CHARACTER_ARCHAEOLOGY_SITES } from '#constants/characters'
import { CharacterArchaeologySites } from '#models/characters/CharacterArchaeologySites'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterArchaeologySitesStore extends Core<CharacterArchaeologySites> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterArchaeologySites,
      store: data_source.getRepository(CHARACTER_ARCHAEOLOGY_SITES),
    })
  }
}