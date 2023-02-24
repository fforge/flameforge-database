import { CHARACTER_PET } from '#constants/characters'
import { CharacterPet } from '#models/characters/CharacterPet'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterPetStore extends Core<CharacterPet> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterPet,
      store: data_source.getRepository(CHARACTER_PET),
    })
  }
}