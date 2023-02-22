import { STORE_AUTH, UPTIME } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(UPTIME, { schema: STORE_AUTH })
export class Uptime {
  @Column('int', { primary: true, name: 'realmid', unsigned: true })
  realmid!: number

  @Column('int', {
    primary: true,
    name: 'starttime',
    unsigned: true,
    default: () => '0',
  })
  starttime!: number

  @Column('int', { name: 'uptime', unsigned: true, default: () => '0' })
  uptime!: number

  @Column('smallint', {
    name: 'maxplayers',
    unsigned: true,
    default: () => '0',
  })
  maxplayers!: number

  @Column('varchar', {
    name: 'revision',
    length: 255,
    default: () => 'Trinitycore',
  })
  revision!: string
}
