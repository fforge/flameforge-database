import { GAME_EVENT_SAVE } from '#constants/characters'
import { GameEventSave } from '#models/characters/GameEventSave'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GameEventSaveStore extends Core<GameEventSave> {
  constructor (data_source: DataSource) {
    super({
      model: new GameEventSave,
      store: data_source.getRepository(GAME_EVENT_SAVE),
    })
  }
}