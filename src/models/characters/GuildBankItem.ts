import { GUILD_BANK_ITEM, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guildid_key', ['guildid'], {})
@Index('Idx_item_guid', ['itemGuid'], {})
@Entity(GUILD_BANK_ITEM, { schema: STORE_CHARACTERS })
export class GuildBankItem {
  @Column('int', {
    primary: true,
    name: 'guildid',
    unsigned: true,
    default: () => '0',
  })
  guildid!: number

  @Column('tinyint', {
    primary: true,
    name: 'TabId',
    unsigned: true,
    default: () => '0',
  })
  tabId!: number

  @Column('tinyint', {
    primary: true,
    name: 'SlotId',
    unsigned: true,
    default: () => '0',
  })
  slotId!: number

  @Column('int', { name: 'item_guid', unsigned: true, default: () => '0' })
  itemGuid!: number
}
