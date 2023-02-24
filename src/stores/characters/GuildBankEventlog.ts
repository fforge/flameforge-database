import { GUILD_BANK_EVENTLOG } from '#constants/characters'
import { GuildBankEventlog } from '#models/characters/GuildBankEventlog'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildBankEventlogStore extends Core<GuildBankEventlog> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildBankEventlog,
      store: data_source.getRepository(GUILD_BANK_EVENTLOG),
    })
  }
}