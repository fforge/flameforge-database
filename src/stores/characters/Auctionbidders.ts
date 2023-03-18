import { AUCTIONBIDDERS } from '#constants/characters'
import { Auctionbidders } from '#models/characters/Auctionbidders'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AuctionbiddersStore extends Core<Auctionbidders> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Auctionbidders,
      name: AUCTIONBIDDERS,
      store: data_source.getRepository(AUCTIONBIDDERS),
    })
  }
}