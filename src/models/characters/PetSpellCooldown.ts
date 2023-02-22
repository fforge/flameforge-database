import { PET_SPELL_COOLDOWN, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(PET_SPELL_COOLDOWN, { schema: STORE_CHARACTERS })
export class PetSpellCooldown {
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
