import { CHARACTER_REPUTATION, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_REPUTATION, { schema: STORE_CHARACTERS })
export class CharacterReputation {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('smallint', {
    primary: true,
    name: 'faction',
    unsigned: true,
    default: () => '0',
  })
  faction!: number

  @Column('int', { name: 'standing', default: () => '0' })
  standing!: number

  @Column('smallint', { name: 'flags', unsigned: true, default: () => '0' })
  flags!: number
}
