import { GUILD_OLD_MEMBER } from '#constants/characters'
import { GuildOldMember } from '#models/characters/GuildOldMember'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildOldMemberStore extends Core<GuildOldMember> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildOldMember,
      store: data_source.getRepository(GUILD_OLD_MEMBER),
    })
  }
}