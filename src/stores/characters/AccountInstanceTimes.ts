import { ACCOUNT_INSTANCE_TIMES } from '#constants/characters'
import { AccountInstanceTimes } from '#models/characters/AccountInstanceTimes'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountInstanceTimesStore extends Core<AccountInstanceTimes> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  AccountInstanceTimes,
      store: data_source.getRepository(ACCOUNT_INSTANCE_TIMES),
    })
  }
}