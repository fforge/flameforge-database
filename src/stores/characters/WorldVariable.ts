import { WORLD_VARIABLE } from '#constants/characters'
import { WorldVariable } from '#models/characters/WorldVariable'
import { DataSource } from 'typeorm'
import Core from '#core'

export class WorldVariableStore extends Core<WorldVariable> {
  constructor (data_source: DataSource) {
    super({
      model: new WorldVariable,
      store: data_source.getRepository(WORLD_VARIABLE),
    })
  }
}