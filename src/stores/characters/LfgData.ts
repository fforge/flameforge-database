import { LFG_DATA } from '#constants/characters'
import { LfgData } from '#models/characters/LfgData'
import { DataSource } from 'typeorm'
import Core from '#core'

export class LfgDataStore extends Core<LfgData> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: LfgData,
      name: LFG_DATA,
      store: data_source.getRepository(LFG_DATA),
    })
  }
}