import { CHARACTER_SKILLS } from '#constants/characters'
import { CharacterSkills } from '#models/characters/CharacterSkills'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterSkillsStore extends Core<CharacterSkills> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterSkills,
      store: data_source.getRepository(CHARACTER_SKILLS),
    })
  }
}