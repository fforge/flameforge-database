import { GUILD_ACHIEVEMENT_PROGRESS } from '#constants/characters'
import { GuildAchievementProgress } from '#models/characters/GuildAchievementProgress'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildAchievementProgressStore extends Core<GuildAchievementProgress> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildAchievementProgress,
      store: data_source.getRepository(GUILD_ACHIEVEMENT_PROGRESS),
    })
  }
}