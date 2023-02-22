import { BATTLENET_ACCOUNTS } from '#constants/auth'
import { BattlenetAccounts } from '#models/auth/BattlenetAccounts'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BattlenetAccountsStore extends Core<BattlenetAccounts> {
  constructor (data_source: DataSource) {
    super({ model: new BattlenetAccounts, store: data_source.getRepository(BATTLENET_ACCOUNTS) })
  }
}