import { POOL_QUEST_SAVE } from '#constants/characters'
import { PoolQuestSave } from '#models/characters/PoolQuestSave'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PoolQuestSaveStore extends Core<PoolQuestSave> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  PoolQuestSave,
      store: data_source.getRepository(POOL_QUEST_SAVE),
    })
  }
}