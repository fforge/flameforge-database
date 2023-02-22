import { ITEM_LOOT_ITEMS } from '#constants/characters'
import { ItemLootItems } from '#models/characters/ItemLootItems'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ItemLootItemsStore extends Core<ItemLootItems> {
  constructor (data_source: DataSource) {
    super({
      model: new ItemLootItems,
      store: data_source.getRepository(ITEM_LOOT_ITEMS),
    })
  }
}