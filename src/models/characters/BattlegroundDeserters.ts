import { BATTLEGROUND_DESERTERS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(BATTLEGROUND_DESERTERS, { schema: STORE_CHARACTERS })
export class BattlegroundDeserters {
  @Column('int', { name: 'guid', comment: 'characters.guid', unsigned: true })
  guid!: number

  @Column('tinyint', {
    name: 'type',
    comment: 'type of the desertion',
    unsigned: true,
  })
  type!: number

  @Column('datetime', {
    name: 'datetime',
    comment: 'datetime of the desertion',
  })
  datetime!: Date
}
