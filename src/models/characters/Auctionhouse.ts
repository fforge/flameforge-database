import { AUCTIONHOUSE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('item_guid', ['itemguid'], { unique: true })
@Entity(AUCTIONHOUSE, { schema: STORE_CHARACTERS })
export class Auctionhouse {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('tinyint', { name: 'houseid', unsigned: true, default: () => '7' })
  houseid!: number

  @Column('int', {
    name: 'itemguid',
    unique: true,
    unsigned: true,
    default: () => '0',
  })
  itemguid!: number

  @Column('int', { name: 'itemowner', unsigned: true, default: () => '0' })
  itemowner!: number

  @Column('bigint', {
    name: 'buyoutprice',
    unsigned: true,
    default: () => '0',
  })
  buyoutprice!: string

  @Column('int', { name: 'time', unsigned: true, default: () => '0' })
  time!: number

  @Column('int', { name: 'buyguid', unsigned: true, default: () => '0' })
  buyguid!: number

  @Column('bigint', { name: 'lastbid', unsigned: true, default: () => '0' })
  lastbid!: string

  @Column('bigint', { name: 'startbid', unsigned: true, default: () => '0' })
  startbid!: string

  @Column('bigint', { name: 'deposit', unsigned: true, default: () => '0' })
  deposit!: string
}
