import { GUILD_FINDER_APPLICANT, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('guildId', ['guildId', 'playerGuid'], { unique: true })
@Entity(GUILD_FINDER_APPLICANT, { schema: STORE_CHARACTERS })
export class GuildFinderApplicant {
  @Column('int', { name: 'guildId', nullable: true, unsigned: true })
  guildId!: Nullable<number>

  @Column('int', { name: 'playerGuid', nullable: true, unsigned: true })
  playerGuid!: Nullable<number>

  @Column('tinyint', {
    name: 'availability',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  availability!: Nullable<number>

  @Column('tinyint', {
    name: 'classRole',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  classRole!: Nullable<number>

  @Column('tinyint', {
    name: 'interests',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  interests!: Nullable<number>

  @Column('varchar', { name: 'comment', nullable: true, length: 255 })
  comment!: Nullable<string>

  @Column('int', { name: 'submitTime', nullable: true, unsigned: true })
  submitTime!: Nullable<number>
}
