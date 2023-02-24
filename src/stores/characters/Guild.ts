import { GUILD } from '#constants/characters'
import { Guild } from '#models/characters/Guild'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildStore extends Core<Guild> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Guild,
      store: data_source.getRepository(GUILD),
    })
  }
}