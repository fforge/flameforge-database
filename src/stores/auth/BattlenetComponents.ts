import { BATTLENET_COMPONENTS } from '#constants/auth'
import { BattlenetComponents } from '#models/auth/BattlenetComponents'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BattlenetComponentsStore extends Core<BattlenetComponents> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  BattlenetComponents,
      store: data_source.getRepository(BATTLENET_COMPONENTS),
    })
  }
}