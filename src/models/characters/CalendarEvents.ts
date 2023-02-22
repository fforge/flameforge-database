import { CALENDAR_EVENTS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CALENDAR_EVENTS, { schema: STORE_CHARACTERS })
export class CalendarEvents {
  @Column('bigint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: string

  @Column('int', { name: 'creator', unsigned: true, default: () => '0' })
  creator!: number

  @Column('varchar', { name: 'title', length: 255, default: () => '' })
  title!: string

  @Column('varchar', { name: 'description', length: 255, default: () => '' })
  description!: string

  @Column('tinyint', { name: 'type', unsigned: true, default: () => '4' })
  type!: number

  @Column('int', { name: 'dungeon', default: () => '-1' })
  dungeon!: number

  @Column('int', { name: 'eventtime', unsigned: true, default: () => '0' })
  eventtime!: number

  @Column('int', { name: 'flags', unsigned: true, default: () => '0' })
  flags!: number

  @Column('int', { name: 'time2', unsigned: true, default: () => '0' })
  time2!: number
}
