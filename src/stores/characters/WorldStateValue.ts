import { WORLD_STATE_VALUE } from '#constants/characters'
import { WorldStateValue } from '#models/characters/WorldStateValue'
import { DataSource } from 'typeorm'
import Core from '#core'

export class WorldStateValueStore extends Core<WorldStateValue> {
  constructor (data_source: DataSource) {
    super({
      model: new WorldStateValue,
      store: data_source.getRepository(WORLD_STATE_VALUE),
    })
  }
}