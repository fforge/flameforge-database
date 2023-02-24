import { CHANNELS } from '#constants/characters'
import { Channels } from '#models/characters/Channels'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ChannelsStore extends Core<Channels> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Channels,
      store: data_source.getRepository(CHANNELS),
    })
  }
}