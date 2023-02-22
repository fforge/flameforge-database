import { GUILD_BANK_EVENTLOG, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guildid_key', ['guildid'], {})
@Index('Idx_PlayerGuid', ['playerGuid'], {})
@Index('Idx_LogGuid', ['logGuid'], {})
@Entity(GUILD_BANK_EVENTLOG, { schema: STORE_CHARACTERS })
export class GuildBankEventlog {
  @Column('int', {
    primary: true,
    name: 'guildid',
    comment: 'Guild Identificator',
    unsigned: true,
    default: () => '0',
  })
  guildid!: number

  @Column('int', {
    primary: true,
    name: 'LogGuid',
    comment: 'Log record identificator - auxiliary column',
    unsigned: true,
    default: () => '0',
  })
  logGuid!: number

  @Column('tinyint', {
    primary: true,
    name: 'TabId',
    comment: 'Guild bank TabId',
    unsigned: true,
    default: () => '0',
  })
  tabId!: number

  @Column('tinyint', {
    name: 'EventType',
    comment: 'Event type',
    unsigned: true,
    default: () => '0',
  })
  eventType!: number

  @Column('int', { name: 'PlayerGuid', unsigned: true, default: () => '0' })
  playerGuid!: number

  @Column('bigint', {
    name: 'ItemOrMoney',
    unsigned: true,
    default: () => '0',
  })
  itemOrMoney!: string

  @Column('smallint', {
    name: 'ItemStackCount',
    unsigned: true,
    default: () => '0',
  })
  itemStackCount!: number

  @Column('tinyint', {
    name: 'DestTabId',
    comment: 'Destination Tab Id',
    unsigned: true,
    default: () => '0',
  })
  destTabId!: number

  @Column('int', {
    name: 'TimeStamp',
    comment: 'Event UNIX time',
    unsigned: true,
    default: () => '0',
  })
  timeStamp!: number
}
