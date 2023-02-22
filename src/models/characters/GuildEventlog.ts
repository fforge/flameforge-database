import { GUILD_EVENTLOG, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('Idx_PlayerGuid1', ['playerGuid1'], {})
@Index('Idx_PlayerGuid2', ['playerGuid2'], {})
@Index('Idx_LogGuid', ['logGuid'], {})
@Entity(GUILD_EVENTLOG, { schema: STORE_CHARACTERS })
export class GuildEventlog {
  @Column('int', {
    primary: true,
    name: 'guildid',
    comment: 'Guild Identificator',
    unsigned: true,
  })
  guildid!: number

  @Column('int', {
    primary: true,
    name: 'LogGuid',
    comment: 'Log record identificator - auxiliary column',
    unsigned: true,
  })
  logGuid!: number

  @Column('tinyint', {
    name: 'EventType',
    comment: 'Event type',
    unsigned: true,
  })
  eventType!: number

  @Column('int', { name: 'PlayerGuid1', comment: 'Player 1', unsigned: true })
  playerGuid1!: number

  @Column('int', { name: 'PlayerGuid2', comment: 'Player 2', unsigned: true })
  playerGuid2!: number

  @Column('tinyint', {
    name: 'NewRank',
    comment: 'New rank(in case promotion/demotion)',
    unsigned: true,
  })
  newRank!: number

  @Column('int', {
    name: 'TimeStamp',
    comment: 'Event UNIX time',
    unsigned: true,
  })
  timeStamp!: number
}
