import { CHARACTER_SOCIAL, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('friend', ['friend'], {})
@Entity(CHARACTER_SOCIAL, { schema: STORE_CHARACTERS })
export class CharacterSocial {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Character Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'friend',
    comment: 'Friend Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  friend!: number

  @Column('tinyint', {
    primary: true,
    name: 'flags',
    comment: 'Friend Flags',
    unsigned: true,
    default: () => '0',
  })
  flags!: number

  @Column('varchar', {
    name: 'note',
    comment: 'Friend Note',
    length: 48,
    default: () => '',
  })
  note!: string
}
