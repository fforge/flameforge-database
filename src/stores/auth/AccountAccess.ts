import { ACCOUNT_ACCESS } from '#constants/auth'
import { AccountAccess } from '#models/auth/AccountAccess'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountAccessStore extends Core<AccountAccess> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: AccountAccess,
      name: ACCOUNT_ACCESS,
      store: data_source.getRepository(ACCOUNT_ACCESS),
    })
  }
}