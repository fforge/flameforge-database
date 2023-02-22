import { ITEM_REFUND_INSTANCE, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ITEM_REFUND_INSTANCE, { schema: STORE_CHARACTERS })
export class ItemRefundInstance {
  @Column('int', {
    primary: true,
    name: 'item_guid',
    comment: 'Item GUID',
    unsigned: true,
  })
  itemGuid!: number

  @Column('int', {
    primary: true,
    name: 'player_guid',
    comment: 'Player GUID',
    unsigned: true,
  })
  playerGuid!: number

  @Column('int', { name: 'paidMoney', unsigned: true, default: () => '0' })
  paidMoney!: number

  @Column('smallint', {
    name: 'paidExtendedCost',
    unsigned: true,
    default: () => '0',
  })
  paidExtendedCost!: number
}
