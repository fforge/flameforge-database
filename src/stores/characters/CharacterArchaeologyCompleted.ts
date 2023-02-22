import { CHARACTER_ARCHAEOLOGY_COMPLETED } from '#constants/characters'
import { CharacterArchaeologyCompleted } from '#models/characters/CharacterArchaeologyCompleted'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterArchaeologyCompletedStore extends Core<CharacterArchaeologyCompleted> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterArchaeologyCompleted,
      store: data_source.getRepository(CHARACTER_ARCHAEOLOGY_COMPLETED),
    })
  }
}