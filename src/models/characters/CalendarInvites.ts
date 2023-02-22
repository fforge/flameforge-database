import { CALENDAR_INVITES, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CALENDAR_INVITES, { schema: STORE_CHARACTERS })
export class CalendarInvites {
  @Column('bigint', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: string

  @Column('bigint', { name: 'event', unsigned: true, default: () => '0' })
  event!: string

  @Column('int', { name: 'invitee', unsigned: true, default: () => '0' })
  invitee!: number

  @Column('int', { name: 'sender', unsigned: true, default: () => '0' })
  sender!: number

  @Column('tinyint', { name: 'status', unsigned: true, default: () => '0' })
  status!: number

  @Column('int', { name: 'statustime', unsigned: true, default: () => '0' })
  statustime!: number

  @Column('tinyint', { name: 'rank', unsigned: true, default: () => '0' })
  rank!: number

  @Column('varchar', { name: 'text', length: 255, default: () => '' })
  text!: string
}
