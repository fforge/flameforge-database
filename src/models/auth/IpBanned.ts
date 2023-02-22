import { IP_BANNED, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(IP_BANNED, { schema: STORE_AUTH })
export class IpBanned {
  @Column('varchar', {
    primary: true,
    name: 'ip',
    length: 15,
    default: () => '127.0.0.1',
  })
  ip!: string

  @Column('int', { primary: true, name: 'bandate', unsigned: true })
  bandate!: number

  @Column('int', { name: 'unbandate', unsigned: true })
  unbandate!: number

  @Column('varchar', {
    name: 'bannedby',
    length: 50,
    default: () => '[Console]',
  })
  bannedby!: string

  @Column('varchar', {
    name: 'banreason',
    length: 255,
    default: () => 'no reason',
  })
  banreason!: string
}
