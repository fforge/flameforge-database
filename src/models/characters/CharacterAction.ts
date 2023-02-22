import { CHARACTER_ACTION, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ACTION, { schema: STORE_CHARACTERS })
export class CharacterAction {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('tinyint', {
    primary: true,
    name: 'spec',
    unsigned: true,
    default: () => '0',
  })
  spec!: number

  @Column('tinyint', {
    primary: true,
    name: 'button',
    unsigned: true,
    default: () => '0',
  })
  button!: number

  @Column('int', { name: 'action', unsigned: true, default: () => '0' })
  action!: number

  @Column('tinyint', { name: 'type', unsigned: true, default: () => '0' })
  type!: number
}
