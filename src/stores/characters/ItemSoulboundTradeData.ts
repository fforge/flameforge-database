import { ITEM_SOULBOUND_TRADE_DATA } from '#constants/characters'
import { ItemSoulboundTradeData } from '#models/characters/ItemSoulboundTradeData'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ItemSoulboundTradeDataStore extends Core<ItemSoulboundTradeData> {
  constructor (data_source: DataSource) {
    super({
      model: new ItemSoulboundTradeData,
      store: data_source.getRepository(ITEM_SOULBOUND_TRADE_DATA),
    })
  }
}