import { ITEM_LOOT_MONEY } from '#constants/characters'
import { ItemLootMoney } from '#models/characters/ItemLootMoney'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ItemLootMoneyStore extends Core<ItemLootMoney> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  ItemLootMoney,
      store: data_source.getRepository(ITEM_LOOT_MONEY),
    })
  }
}