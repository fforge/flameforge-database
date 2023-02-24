import { ACCOUNT } from '#constants/auth'
import { Account } from '#models/auth/Account'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountStore extends Core<Account> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Account,
      store: data_source.getRepository(ACCOUNT),
    })
  }
}
