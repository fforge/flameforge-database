import { GM_TICKET } from '#constants/characters'
import { GmTicket } from '#models/characters/GmTicket'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GmTicketStore extends Core<GmTicket> {
  constructor (data_source: DataSource) {
    super({
      model: new GmTicket,
      store: data_source.getRepository(GM_TICKET),
    })
  }
}