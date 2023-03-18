import { ITEM_INSTANCE } from '#constants/characters'
import { ItemInstance } from '#models/characters/ItemInstance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ItemInstanceStore extends Core<ItemInstance> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: ItemInstance,
      name: ITEM_INSTANCE,
      store: data_source.getRepository(ITEM_INSTANCE),
    })
  }
}