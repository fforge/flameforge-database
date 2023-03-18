import { GAME_EVENT_SAVE } from '#constants/characters'
import { GameEventSave } from '#models/characters/GameEventSave'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GameEventSaveStore extends Core<GameEventSave> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GameEventSave,
      name: GAME_EVENT_SAVE,
      store: data_source.getRepository(GAME_EVENT_SAVE),
    })
  }
}