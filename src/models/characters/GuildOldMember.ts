import { GUILD_OLD_MEMBER, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GUILD_OLD_MEMBER, { schema: STORE_CHARACTERS })
export class GuildOldMember {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('int', { name: 'guildId', unsigned: true })
  guildId!: number

  @Column('int', { name: 'weekReputation', unsigned: true })
  weekReputation!: number

  @Column('int', { name: 'leaveDate', unsigned: true })
  leaveDate!: number
}
