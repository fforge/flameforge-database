import { PET_SPELL } from '#constants/characters'
import { PetSpell } from '#models/characters/PetSpell'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PetSpellStore extends Core<PetSpell> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  PetSpell,
      store: data_source.getRepository(PET_SPELL),
    })
  }
}