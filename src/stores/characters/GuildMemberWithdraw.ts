import { GUILD_MEMBER_WITHDRAW } from '#constants/characters'
import { GuildMemberWithdraw } from '#models/characters/GuildMemberWithdraw'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildMemberWithdrawStore extends Core<GuildMemberWithdraw> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GuildMemberWithdraw,
      name: GUILD_MEMBER_WITHDRAW,
      store: data_source.getRepository(GUILD_MEMBER_WITHDRAW),
    })
  }
}