import { CHARACTER_STATS } from '#constants/characters'
import { CharacterStats } from '#models/characters/CharacterStats'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterStatsStore extends Core<CharacterStats> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterStats,
      name: CHARACTER_STATS,
      store: data_source.getRepository(CHARACTER_STATS),
    })
  }
}