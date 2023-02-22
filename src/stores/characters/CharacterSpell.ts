import { CHARACTER_SPELL } from '#constants/characters'
import { CharacterSpell } from '#models/characters/CharacterSpell'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSpellStore extends Core<CharacterSpell> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterSpell,
      store: data_source.getRepository(CHARACTER_SPELL),
    })
  }
}