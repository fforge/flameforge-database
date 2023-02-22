import { ACCOUNT_DATA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_DATA, { schema: STORE_CHARACTERS })
export class AccountData {
  @Column('int', {
    primary: true,
    name: 'accountId',
    comment: 'Account Identifier',
    unsigned: true,
    default: () => '0',
  })
  accountId!: number

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
