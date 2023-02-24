import { CHARACTER_SPELL } from '#constants/characters'
import { CharacterSpell } from '#models/characters/CharacterSpell'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSpellStore extends Core<CharacterSpell> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterSpell,
      store: data_source.getRepository(CHARACTER_SPELL),
    })
  }
}