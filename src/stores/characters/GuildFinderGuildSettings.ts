import { GUILD_FINDER_GUILD_SETTINGS } from '#constants/characters'
import { GuildFinderGuildSettings } from '#models/characters/GuildFinderGuildSettings'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildFinderGuildSettingsStore extends Core<GuildFinderGuildSettings> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildFinderGuildSettings,
      store: data_source.getRepository(GUILD_FINDER_GUILD_SETTINGS),
    })
  }
}