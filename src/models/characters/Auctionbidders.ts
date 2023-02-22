import { AUCTIONBIDDERS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(AUCTIONBIDDERS, { schema: STORE_CHARACTERS })
export class Auctionbidders {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('int', {
    primary: true,
    name: 'bidderguid',
    unsigned: true,
    default: () => '0',
  })
  bidderguid!: number
}
