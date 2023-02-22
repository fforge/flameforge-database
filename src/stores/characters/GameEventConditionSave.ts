import { GAME_EVENT_CONDITION_SAVE } from '#constants/characters'
import { GameEventConditionSave } from '#models/characters/GameEventConditionSave'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GameEventConditionSaveStore extends Core<GameEventConditionSave> {
  constructor (data_source: DataSource) {
    super({
      model: new GameEventConditionSave,
      store: data_source.getRepository(GAME_EVENT_CONDITION_SAVE),
    })
  }
}