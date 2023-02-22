import { BATTLENET_ACCOUNT_BANS, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(BATTLENET_ACCOUNT_BANS, { schema: STORE_AUTH })
export class BattlenetAccountBans {
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
}
