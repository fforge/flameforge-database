import { GUILD_BANK_RIGHT } from '#constants/characters'
import { GuildBankRight } from '#models/characters/GuildBankRight'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildBankRightStore extends Core<GuildBankRight> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildBankRight,
      store: data_source.getRepository(GUILD_BANK_RIGHT),
    })
  }
}