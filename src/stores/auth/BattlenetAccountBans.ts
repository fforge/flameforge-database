import { BATTLENET_ACCOUNT_BANS } from '#constants/auth'
import { BattlenetAccountBans } from '#models/auth/BattlenetAccountBans'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BattlenetAccountBansStore extends Core<BattlenetAccountBans> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  BattlenetAccountBans,
      store: data_source.getRepository(BATTLENET_ACCOUNT_BANS),
    })
  }
}