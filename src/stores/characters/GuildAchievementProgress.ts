import { GUILD_ACHIEVEMENT_PROGRESS } from '#constants/characters'
import { GuildAchievementProgress } from '#models/characters/GuildAchievementProgress'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildAchievementProgressStore extends Core<GuildAchievementProgress> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GuildAchievementProgress,
      name: GUILD_ACHIEVEMENT_PROGRESS,
      store: data_source.getRepository(GUILD_ACHIEVEMENT_PROGRESS),
    })
  }
}