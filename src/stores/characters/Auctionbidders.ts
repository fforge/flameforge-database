import { AUCTIONBIDDERS } from '#constants/characters'
import { Auctionbidders } from '#models/characters/Auctionbidders'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AuctionbiddersStore extends Core<Auctionbidders> {
  constructor (data_source: DataSource) {
    super({
      model: new Auctionbidders,
      store: data_source.getRepository(AUCTIONBIDDERS),
    })
  }
}