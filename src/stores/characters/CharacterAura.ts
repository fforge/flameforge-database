import { CHARACTER_ARENA_STATS } from '#constants/characters'
import { CharacterAura } from '#models/characters/CharacterAura'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterAuraStore extends Core<CharacterAura> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterAura,
      name: CHARACTER_ARENA_STATS,
      store: data_source.getRepository(CHARACTER_ARENA_STATS),
    })
  }
}