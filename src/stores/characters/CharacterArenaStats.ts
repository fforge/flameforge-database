import { CHARACTER_ARENA_STATS } from '#constants/characters'
import { CharacterArenaStats } from '#models/characters/CharacterArenaStats'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterArenaStatsStore extends Core<CharacterArenaStats> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterArenaStats,
      store: data_source.getRepository(CHARACTER_ARENA_STATS),
    })
  }
}