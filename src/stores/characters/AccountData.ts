import { ACCOUNT_DATA } from '#constants/characters'
import { AccountData } from '#models/characters/AccountData'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountDataStore extends Core<AccountData> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  AccountData,
      store: data_source.getRepository(ACCOUNT_DATA),
    })
  }
}