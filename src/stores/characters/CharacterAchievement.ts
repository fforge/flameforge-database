import { CHARACTER_ACHIEVEMENT } from '#constants/characters'
import { CharacterAchievement } from '#models/characters/CharacterAchievement'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterAchievementStore extends Core<CharacterAchievement> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterAchievement,
      name: CHARACTER_ACHIEVEMENT,
      store: data_source.getRepository(CHARACTER_ACHIEVEMENT),
    })
  }
}