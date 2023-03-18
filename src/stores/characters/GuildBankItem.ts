import { GUILD_BANK_ITEM } from '#constants/characters'
import { GuildBankItem } from '#models/characters/GuildBankItem'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildBankItemStore extends Core<GuildBankItem> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GuildBankItem,
      name: GUILD_BANK_ITEM,
      store: data_source.getRepository(GUILD_BANK_ITEM),
    })
  }
}