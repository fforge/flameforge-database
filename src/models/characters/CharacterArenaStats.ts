import { CHARACTER_ARENA_STATS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ARENA_STATS, { schema: STORE_CHARACTERS })
export class CharacterArenaStats {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('tinyint', {
    primary: true,
    name: 'slot',
    unsigned: true,
    default: () => '0',
  })
  slot!: number

  @Column('smallint', {
    name: 'matchMakerRating',
    unsigned: true,
    default: () => '0',
  })
  matchMakerRating!: number
}
