import { CHARACTER_ARCHAEOLOGY_PROJECTS } from '#constants/characters'
import { CharacterArchaeologyProjects } from '#models/characters/CharacterArchaeologyProjects'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterArchaeologyProjectsStore extends Core<CharacterArchaeologyProjects> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CharacterArchaeologyProjects,
      name: CHARACTER_ARCHAEOLOGY_PROJECTS,
      store: data_source.getRepository(CHARACTER_ARCHAEOLOGY_PROJECTS),
    })
  }
}