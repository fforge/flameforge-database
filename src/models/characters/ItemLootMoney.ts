import { ITEM_LOOT_MONEY, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ITEM_LOOT_MONEY, { schema: STORE_CHARACTERS })
export class ItemLootMoney {
  @Column('int', {
    primary: true,
    name: 'container_id',
    comment: 'guid of container (item_instance.guid)',
    unsigned: true,
    default: () => '0',
  })
  containerId!: number

  @Column('int', {
    name: 'money',
    comment: 'money loot (in copper)',
    unsigned: true,
    default: () => '0',
  })
  money!: number
}
