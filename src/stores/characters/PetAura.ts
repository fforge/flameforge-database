import { PET_AURA } from '#constants/characters'
import { PetAura } from '#models/characters/PetAura'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PetAuraStore extends Core<PetAura> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  PetAura,
      store: data_source.getRepository(PET_AURA),
    })
  }
}