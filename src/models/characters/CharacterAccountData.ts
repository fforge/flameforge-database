import { CHARACTER_ACCOUNT_DATA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ACCOUNT_DATA, { schema: STORE_CHARACTERS })
export class CharacterAccountData {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('tinyint', {
    primary: true,
    name: 'type',
    unsigned: true,
    default: () => '0',
  })
  type!: number

  @Column('int', { name: 'time', unsigned: true, default: () => '0' })
  time!: number

  @Column('blob', { name: 'data' })
  data!: Buffer
}
