import { GAME_EVENT_CONDITION_SAVE, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(GAME_EVENT_CONDITION_SAVE, { schema: STORE_CHARACTERS })
export class GameEventConditionSave {
  @Column('tinyint', { primary: true, name: 'eventEntry', unsigned: true })
  eventEntry!: number

  @Column('int', {
    primary: true,
    name: 'condition_id',
    unsigned: true,
    default: () => '0',
  })
  conditionId!: number

  @Column('float', {
    name: 'done',
    nullable: true,
    precision: 12,
    default: () => '0',
  })
  done!: Nullable<number>
}
