import { ACCOUNT_MUTED } from '#constants/auth'
import { AccountMuted } from '#models/auth/AccountMuted'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountMutedStore extends Core<AccountMuted> {
  constructor (data_source: DataSource) {
    super({ model: new AccountMuted, store: data_source.getRepository(ACCOUNT_MUTED) })
  }
}