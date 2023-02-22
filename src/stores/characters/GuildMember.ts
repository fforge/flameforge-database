import { GUILD_MEMBER } from '#constants/characters'
import { GuildMember } from '#models/characters/GuildMember'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildMemberStore extends Core<GuildMember> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildMember,
      store: data_source.getRepository(GUILD_MEMBER),
    })
  }
}