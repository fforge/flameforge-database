import { CHARACTER_TALENT } from '#constants/characters'
import { CharacterTalent } from '#models/characters/CharacterTalent'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterTalentStore extends Core<CharacterTalent> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterTalent,
      store: data_source.getRepository(CHARACTER_TALENT),
    })
  }
}