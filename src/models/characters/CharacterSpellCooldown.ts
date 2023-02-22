import { CHARACTER_SPELL_COOLDOWN, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_SPELL_COOLDOWN, { schema: STORE_CHARACTERS })
export class CharacterSpellCooldown {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier, Low part',
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

  @Column('int', {
    name: 'item',
    comment: 'Item Identifier',
    unsigned: true,
    default: () => '0',
  })
  item!: number

  @Column('int', { name: 'time', unsigned: true, default: () => '0' })
  time!: number

  @Column('int', {
    name: 'categoryId',
    comment: 'Spell category Id',
    unsigned: true,
    default: () => '0',
  })
  categoryId!: number

  @Column('int', { name: 'categoryEnd', unsigned: true, default: () => '0' })
  categoryEnd!: number
}
