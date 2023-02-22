import { CHARACTER_SPELL, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_SPELL, { schema: STORE_CHARACTERS })
export class CharacterSpell {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'spell',
    comment: 'Spell Identifier',
    unsigned: true,
    default: () => '0',
  })
  spell!: number

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '1' })
  active!: number

  @Column('tinyint', { name: 'disabled', unsigned: true, default: () => '0' })
  disabled!: number
}
