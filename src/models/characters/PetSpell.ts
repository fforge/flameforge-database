import { PET_SPELL, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(PET_SPELL, { schema: STORE_CHARACTERS })
export class PetSpell {
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

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '0' })
  active!: number
}
