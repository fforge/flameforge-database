import { ACCOUNT_TUTORIAL, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_TUTORIAL, { schema: STORE_CHARACTERS })
export class AccountTutorial {
  @Column('int', {
    primary: true,
    name: 'accountId',
    comment: 'Account Identifier',
    unsigned: true,
    default: () => '0',
  })
  accountId!: number

  @Column('int', { name: 'tut0', unsigned: true, default: () => '0' })
  tut0!: number

  @Column('int', { name: 'tut1', unsigned: true, default: () => '0' })
  tut1!: number

  @Column('int', { name: 'tut2', unsigned: true, default: () => '0' })
  tut2!: number

  @Column('int', { name: 'tut3', unsigned: true, default: () => '0' })
  tut3!: number

  @Column('int', { name: 'tut4', unsigned: true, default: () => '0' })
  tut4!: number

  @Column('int', { name: 'tut5', unsigned: true, default: () => '0' })
  tut5!: number

  @Column('int', { name: 'tut6', unsigned: true, default: () => '0' })
  tut6!: number

  @Column('int', { name: 'tut7', unsigned: true, default: () => '0' })
  tut7!: number
}
