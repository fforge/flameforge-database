import { MAIL } from '#constants/characters'
import { Mail } from '#models/characters/Mail'
import { DataSource } from 'typeorm'
import Core from '#core'

export class MailStore extends Core<Mail> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Mail,
      store: data_source.getRepository(MAIL),
    })
  }
}