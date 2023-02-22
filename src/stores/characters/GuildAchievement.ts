import { GUILD_ACHIEVEMENT } from '#constants/characters'
import { GuildAchievement } from '#models/characters/GuildAchievement'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildAchievementStore extends Core<GuildAchievement> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildAchievement,
      store: data_source.getRepository(GUILD_ACHIEVEMENT),
    })
  }
}