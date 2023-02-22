import { AUCTIONHOUSE } from '#constants/characters'
import { Auctionhouse } from '#models/characters/Auctionhouse'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AuctionhouseStore extends Core<Auctionhouse> {
  constructor (data_source: DataSource) {
    super({
      model: new Auctionhouse,
      store: data_source.getRepository(AUCTIONHOUSE),
    })
  }
}