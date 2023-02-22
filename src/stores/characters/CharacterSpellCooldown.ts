import { CHARACTER_SPELL_COOLDOWN } from '#constants/characters'
import { CharacterSpellCooldown } from '#models/characters/CharacterSpellCooldown'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSpellCooldownStore extends Core<CharacterSpellCooldown> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterSpellCooldown,
      store: data_source.getRepository(CHARACTER_SPELL_COOLDOWN),
    })
  }
}