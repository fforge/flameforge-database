import { INSTANCE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('instance', ['instance'], {})
@Entity(INSTANCE, { schema: STORE_CHARACTERS })
export class GroupInstance {
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
}
