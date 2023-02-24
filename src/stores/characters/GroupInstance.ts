import { GROUP_INSTANCE } from '#constants/characters'
import { GroupInstance } from '#models/characters/GroupInstance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GroupInstanceStore extends Core<GroupInstance> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  GroupInstance,
      store: data_source.getRepository(GROUP_INSTANCE),
    })
  }
}