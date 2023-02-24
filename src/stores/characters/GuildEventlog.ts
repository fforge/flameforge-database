import { GUILD_EVENTLOG } from '#constants/characters'
import { GuildEventlog } from '#models/characters/GuildEventlog'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildEventlogStore extends Core<GuildEventlog> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildEventlog,
      store: data_source.getRepository(GUILD_EVENTLOG),
    })
  }
}