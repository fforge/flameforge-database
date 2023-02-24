import { BATTLENET_MODULES } from '#constants/auth'
import { BattlenetModules } from '#models/auth/BattlenetModules'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BattlenetModulesStore extends Core<BattlenetModules> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  BattlenetModules,
      store: data_source.getRepository(BATTLENET_MODULES),
    })
  }
}