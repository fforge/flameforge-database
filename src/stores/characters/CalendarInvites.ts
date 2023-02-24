import { CALENDAR_INVITES } from '#constants/characters'
import { CalendarInvites } from '#models/characters/CalendarInvites'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CalendarInvitesStore extends Core<CalendarInvites> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CalendarInvites,
      store: data_source.getRepository(CALENDAR_INVITES),
    })
  }
}