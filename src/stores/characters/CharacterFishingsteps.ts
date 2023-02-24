import { CHARACTER_FISHINGSTEPS } from '#constants/characters'
import { CharacterFishingsteps } from '#models/characters/CharacterFishingsteps'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterFishingstepsStore extends Core<CharacterFishingsteps> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterFishingsteps,
      store: data_source.getRepository(CHARACTER_FISHINGSTEPS),
    })
  }
}