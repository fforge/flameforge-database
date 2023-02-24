import { GUILD_RANK } from '#constants/characters'
import { GuildRank } from '#models/characters/GuildRank'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildRankStore extends Core<GuildRank> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildRank,
      store: data_source.getRepository(GUILD_RANK),
    })
  }
}