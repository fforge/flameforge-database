import { GROUP_MEMBER, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guid_key', ['guid'], { unique: true })
@Index('guildid_key', ['guildid'], {})
@Index('guildid_rank_key', ['guildid', 'rank'], {})
@Entity(GROUP_MEMBER, { schema: STORE_CHARACTERS })
export class GuildMember {
  @Column('int', {
    name: 'guildid',
    comment: 'Guild Identificator',
    unsigned: true,
  })
  guildid!: number

  @Column('int', { name: 'guid', unsigned: true })
  guid!: number

  @Column('tinyint', { name: 'rank', unsigned: true })
  rank!: number

  @Column('varchar', { name: 'pnote', length: 31, default: () => '' })
  pnote!: string

  @Column('varchar', { name: 'offnote', length: 31, default: () => '' })
  offnote!: string

  @Column('int', { name: 'activity', unsigned: true, default: () => '0' })
  activity!: number

  @Column('int', { name: 'weekActivity', unsigned: true, default: () => '0' })
  weekActivity!: number

  @Column('int', {
    name: 'weekReputation',
    unsigned: true,
    default: () => '0',
  })
  weekReputation!: number
}
