import { GUILD_BANK_ITEM } from '#constants/characters'
import { GuildBankItem } from '#models/characters/GuildBankItem'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildBankItemStore extends Core<GuildBankItem> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildBankItem,
      store: data_source.getRepository(GUILD_BANK_ITEM),
    })
  }
}