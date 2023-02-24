import { GUILD_BANK_TAB } from '#constants/characters'
import { GuildBankTab } from '#models/characters/GuildBankTab'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildBankTabStore extends Core<GuildBankTab> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GuildBankTab,
      store: data_source.getRepository(GUILD_BANK_TAB),
    })
  }
}