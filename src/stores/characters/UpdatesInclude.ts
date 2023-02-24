import { CHARACTERS_UPDATES_INCLUDE } from '#constants/characters'
import { UpdatesInclude } from '#models/characters/UpdatesInclude'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharactersUpdatesIncludeStore extends Core<UpdatesInclude> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  UpdatesInclude,
      store: data_source.getRepository(CHARACTERS_UPDATES_INCLUDE),
    })
  }
}