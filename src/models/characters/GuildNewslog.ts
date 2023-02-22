import { GUILD_NEWSLOG, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guildid_key', ['guildid'], {})
@Index('Idx_PlayerGuid', ['playerGuid'], {})
@Index('Idx_LogGuid', ['logGuid'], {})
@Entity(GUILD_NEWSLOG, { schema: STORE_CHARACTERS })
export class GuildNewslog {
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
    name: 'EventType',
    comment: 'Event type',
    unsigned: true,
    default: () => '0',
  })
  eventType!: number

  @Column('int', { name: 'PlayerGuid', unsigned: true, default: () => '0' })
  playerGuid!: number

  @Column('int', { name: 'Flags', unsigned: true, default: () => '0' })
  flags!: number

  @Column('int', { name: 'Value', unsigned: true, default: () => '0' })
  value!: number

  @Column('int', {
    name: 'TimeStamp',
    comment: 'Event UNIX time',
    unsigned: true,
    default: () => '0',
  })
  timeStamp!: number
}
