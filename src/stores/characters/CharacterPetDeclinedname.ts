import { CHARACTER_PET_DECLINEDNAME } from '#constants/characters'
import { CharacterPetDeclinedname } from '#models/characters/CharacterPetDeclinedname'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterPetDeclinednameStore extends Core<CharacterPetDeclinedname> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterPetDeclinedname,
      store: data_source.getRepository(CHARACTER_PET_DECLINEDNAME),
    })
  }
}