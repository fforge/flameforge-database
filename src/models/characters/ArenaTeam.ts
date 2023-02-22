import { ARENA_TEAM, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ARENA_TEAM, { schema: STORE_CHARACTERS })
export class ArenaTeam {
  @Column('int', {
    primary: true,
    name: 'arenaTeamId',
    unsigned: true,
    default: () => '0',
  })
  arenaTeamId!: number

  @Column('varchar', { name: 'name', length: 24 })
  name!: string

  @Column('int', { name: 'captainGuid', unsigned: true, default: () => '0' })
  captainGuid!: number

  @Column('tinyint', { name: 'type', unsigned: true, default: () => '0' })
  type!: number

  @Column('smallint', { name: 'rating', unsigned: true, default: () => '0' })
  rating!: number

  @Column('smallint', {
    name: 'seasonGames',
    unsigned: true,
    default: () => '0',
  })
  seasonGames!: number

  @Column('smallint', {
    name: 'seasonWins',
    unsigned: true,
    default: () => '0',
  })
  seasonWins!: number

  @Column('smallint', {
    name: 'weekGames',
    unsigned: true,
    default: () => '0',
  })
  weekGames!: number

  @Column('smallint', {
    name: 'weekWins',
    unsigned: true,
    default: () => '0',
  })
  weekWins!: number

  @Column('int', { name: 'rank', unsigned: true, default: () => '0' })
  rank!: number

  @Column('int', {
    name: 'backgroundColor',
    unsigned: true,
    default: () => '0',
  })
  backgroundColor!: number

  @Column('tinyint', {
    name: 'emblemStyle',
    unsigned: true,
    default: () => '0',
  })
  emblemStyle!: number

  @Column('int', { name: 'emblemColor', unsigned: true, default: () => '0' })
  emblemColor!: number

  @Column('tinyint', {
    name: 'borderStyle',
    unsigned: true,
    default: () => '0',
  })
  borderStyle!: number

  @Column('int', { name: 'borderColor', unsigned: true, default: () => '0' })
  borderColor!: number
}
