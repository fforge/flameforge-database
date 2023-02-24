import { QUEST_TRACKER } from '#constants/characters'
import { QuestTracker } from '#models/characters/QuestTracker'
import { DataSource } from 'typeorm'
import Core from '#core'

export class QuestTrackerStore extends Core<QuestTracker> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  QuestTracker,
      store: data_source.getRepository(QUEST_TRACKER),
    })
  }
}