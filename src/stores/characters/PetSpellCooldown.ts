import { PET_SPELL_COOLDOWN } from '#constants/characters'
import { PetSpellCooldown } from '#models/characters/PetSpellCooldown'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PetSpellCooldownStore extends Core<PetSpellCooldown> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: PetSpellCooldown,
      name: PET_SPELL_COOLDOWN,
      store: data_source.getRepository(PET_SPELL_COOLDOWN),
    })
  }
}