import { GUILD_BANK_RIGHT, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guildid_key', ['guildid'], {})
@Entity(GUILD_BANK_RIGHT, { schema: STORE_CHARACTERS })
export class GuildBankRight {
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
    name: 'rid',
    unsigned: true,
    default: () => '0',
  })
  rid!: number

  @Column('tinyint', { name: 'gbright', unsigned: true, default: () => '0' })
  gbright!: number

  @Column('int', { name: 'SlotPerDay', unsigned: true, default: () => '0' })
  slotPerDay!: number
}
