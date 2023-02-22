import { ITEM_SOULBOUND_TRADE_DATA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ITEM_SOULBOUND_TRADE_DATA, { schema: STORE_CHARACTERS })
export class ItemSoulboundTradeData {
  @Column('int', {
    primary: true,
    name: 'itemGuid',
    comment: 'Item GUID',
    unsigned: true,
  })
  itemGuid!: number

  @Column('text', {
    name: 'allowedPlayers',
    comment:
      'Space separated GUID list of players who can receive this item in trade',
  })
  allowedPlayers!: string
}
