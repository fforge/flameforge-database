import { ACCOUNT_BANNED } from '#constants/auth'
import { AccountBanned } from '#models/auth/AccountBanned'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountBannedStore extends Core<AccountBanned> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: AccountBanned,
      store: data_source.getRepository(ACCOUNT_BANNED),
    })
  }
}