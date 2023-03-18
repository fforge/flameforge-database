import { GROUPS } from '#constants/characters'
import { Groups } from '#models/characters/Groups'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GroupsStore extends Core<Groups> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Groups,
      name: GROUPS,
      store: data_source.getRepository(GROUPS),
    })
  }
}