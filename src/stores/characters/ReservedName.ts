import { RESERVED_NAME } from '#constants/characters'
import { ReservedName } from '#models/characters/ReservedName'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ReservedNameStore extends Core<ReservedName> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  ReservedName,
      store: data_source.getRepository(RESERVED_NAME),
    })
  }
}