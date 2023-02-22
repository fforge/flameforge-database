import { ARENA_TEAM_MEMBER, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ARENA_TEAM_MEMBER, { schema: STORE_CHARACTERS })
export class ArenaTeamMember {
  @Column('int', {
    primary: true,
    name: 'arenaTeamId',
    unsigned: true,
    default: () => '0',
  })
  arenaTeamId!: number

  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

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
    name: 'personalRating',
    unsigned: true,
    default: () => '0',
  })
  personalRating!: number
}
