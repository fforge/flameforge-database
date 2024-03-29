import { CHARACTER_SKILLS } from '#constants/characters'
import { CharacterSkills } from '#models/characters/CharacterSkills'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSkillsStore extends Core<CharacterSkills> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterSkills,
      name: CHARACTER_SKILLS,
      store: data_source.getRepository(CHARACTER_SKILLS),
    })
  }
}