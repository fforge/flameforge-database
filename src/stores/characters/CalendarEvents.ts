import { CALENDAR_EVENTS } from '#constants/characters'
import { CalendarEvents } from '#models/characters/CalendarEvents'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CalendarEventsStore extends Core<CalendarEvents> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: CalendarEvents,
      name: CALENDAR_EVENTS,
      store: data_source.getRepository(CALENDAR_EVENTS),
    })
  }
}