import { CHARACTER_VOID_STORAGE } from '#constants/characters'
import { CharacterVoidStorage } from '#models/characters/CharacterVoidStorage'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterVoidStorageStore extends Core<CharacterVoidStorage> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterVoidStorage,
      store: data_source.getRepository(CHARACTER_VOID_STORAGE),
    })
  }
}