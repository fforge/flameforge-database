import { GROUPS } from '#constants/characters'
import { Groups } from '#models/characters/Groups'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GroupsStore extends Core<Groups> {
  constructor (data_source: DataSource) {
    super({
      model: new Groups,
      store: data_source.getRepository(GROUPS),
    })
  }
}