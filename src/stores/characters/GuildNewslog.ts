import { GUILD_NEWSLOG } from '#constants/characters'
import { GuildNewslog } from '#models/characters/GuildNewslog'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildNewslogStore extends Core<GuildNewslog> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildNewslog,
      store: data_source.getRepository(GUILD_NEWSLOG),
    })
  }
}