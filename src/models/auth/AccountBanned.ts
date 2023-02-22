import { ACCOUNT_BANNED, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_BANNED, { schema: STORE_AUTH })
export class AccountBanned {
  @Column('int', {
    primary: true,
    name: 'id',
    comment: 'Account id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('int', {
    primary: true,
    name: 'bandate',
    unsigned: true,
    default: () => '0',
  })
  bandate!: number

  @Column('int', { name: 'unbandate', unsigned: true, default: () => '0' })
  unbandate!: number

  @Column('varchar', { name: 'bannedby', length: 50 })
  bannedby!: string

  @Column('varchar', { name: 'banreason', length: 255 })
  banreason!: string

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '1' })
  active!: number
}
