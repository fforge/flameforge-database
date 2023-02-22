import { CHARACTER_INSTANCE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('instance', ['instance'], {})
@Entity(CHARACTER_INSTANCE, { schema: STORE_CHARACTERS })
export class CharacterInstance {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'instance',
    unsigned: true,
    default: () => '0',
  })
  instance!: number

  @Column('tinyint', {
    name: 'permanent',
    unsigned: true,
    default: () => '0',
  })
  permanent!: number

  @Column('tinyint', {
    name: 'extendState',
    unsigned: true,
    default: () => '1',
  })
  extendState!: number
}
