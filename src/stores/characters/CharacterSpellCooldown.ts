import { CHARACTER_SPELL_COOLDOWN } from '#constants/characters'
import { CharacterSpellCooldown } from '#models/characters/CharacterSpellCooldown'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSpellCooldownStore extends Core<CharacterSpellCooldown> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterSpellCooldown,
      name: CHARACTER_SPELL_COOLDOWN,
      store: data_source.getRepository(CHARACTER_SPELL_COOLDOWN),
    })
  }
}