import { ACCOUNT_TUTORIAL } from '#constants/characters'
import { AccountTutorial } from '#models/characters/AccountTutorial'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AccountTutorialStore extends Core<AccountTutorial> {
  constructor (data_source: DataSource) {
    super({
      model: new AccountTutorial,
      store: data_source.getRepository(ACCOUNT_TUTORIAL),
    })
  }
}