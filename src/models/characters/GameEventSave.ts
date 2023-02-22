import { GAME_EVENT_SAVE, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GAME_EVENT_SAVE, { schema: STORE_CHARACTERS })
export class GameEventSave {
  @Column('tinyint', { primary: true, name: 'eventEntry', unsigned: true })
  eventEntry!: number

  @Column('tinyint', { name: 'state', unsigned: true, default: () => '1' })
  state!: number

  @Column('int', { name: 'next_start', unsigned: true, default: () => '0' })
  nextStart!: number
}
