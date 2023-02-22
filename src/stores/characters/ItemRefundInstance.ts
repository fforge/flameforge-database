import { ITEM_REFUND_INSTANCE } from '#constants/characters'
import { ItemRefundInstance } from '#models/characters/ItemRefundInstance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ItemRefundInstanceStore extends Core<ItemRefundInstance> {
  constructor (data_source: DataSource) {
    super({
      model: new ItemRefundInstance,
      store: data_source.getRepository(ITEM_REFUND_INSTANCE),
    })
  }
}