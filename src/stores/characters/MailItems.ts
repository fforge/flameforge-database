import { MAIL_ITEMS } from '#constants/characters'
import { MailItems } from '#models/characters/MailItems'
import { DataSource } from 'typeorm'
import Core from '#core'

export class MailItemsStore extends Core<MailItems> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  MailItems,
      store: data_source.getRepository(MAIL_ITEMS),
    })
  }
}