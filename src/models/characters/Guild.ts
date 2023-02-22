import { GUILD, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(GUILD, { schema: STORE_CHARACTERS })
export class Guild {
  @Column('int', {
    primary: true,
    name: 'guildid',
    unsigned: true,
    default: () => '0',
  })
  guildid!: number

  @Column('varchar', { name: 'name', length: 24, default: () => '' })
  name!: string

  @Column('int', { name: 'leaderguid', unsigned: true, default: () => '0' })
  leaderguid!: number

  @Column('tinyint', {
    name: 'EmblemStyle',
    unsigned: true,
    default: () => '0',
  })
  emblemStyle!: number

  @Column('tinyint', {
    name: 'EmblemColor',
    unsigned: true,
    default: () => '0',
  })
  emblemColor!: number

  @Column('tinyint', {
    name: 'BorderStyle',
    unsigned: true,
    default: () => '0',
  })
  borderStyle!: number

  @Column('tinyint', {
    name: 'BorderColor',
    unsigned: true,
    default: () => '0',
  })
  borderColor!: number

  @Column('tinyint', {
    name: 'BackgroundColor',
    unsigned: true,
    default: () => '0',
  })
  backgroundColor!: number

  @Column('varchar', { name: 'info', length: 500, default: () => '' })
  info!: string

  @Column('varchar', { name: 'motd', length: 128, default: () => '' })
  motd!: string

  @Column('int', { name: 'createdate', unsigned: true, default: () => '0' })
  createdate!: number

  @Column('bigint', { name: 'BankMoney', unsigned: true, default: () => '0' })
  bankMoney!: string

  @Column('int', {
    name: 'level',
    nullable: true,
    unsigned: true,
    default: () => '1',
  })
  level!: Nullable<number>

  @Column('bigint', {
    name: 'experience',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  experience!: Nullable<string>

  @Column('bigint', {
    name: 'todayExperience',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  todayExperience!: Nullable<string>

  @Column('int', {
    name: 'completedDungeonChallenges',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  completedDungeonChallenges!: Nullable<number>

  @Column('int', {
    name: 'completedRaidChallenges',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  completedRaidChallenges!: Nullable<number>

  @Column('int', {
    name: 'completedRatedBattlegroundChallenges',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  completedRatedBattlegroundChallenges!: Nullable<number>

  @Column('bigint', {
    name: 'WeeklyBonusMoney',
    unsigned: true,
    default: () => '0',
  })
  weeklyBonusMoney!: string
}
