import { CHARACTER_ACHIEVEMENT_PROGRESS } from '#constants/characters'
import { CharacterAchievementProgress } from '#models/characters/CharacterAchievementProgress'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterAchievementProgressStore extends Core<CharacterAchievementProgress> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterAchievementProgress,
      store: data_source.getRepository(CHARACTER_ACHIEVEMENT_PROGRESS),
    })
  }
}