import { POOL_QUEST_SAVE, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(POOL_QUEST_SAVE, { schema: STORE_CHARACTERS })
export class PoolQuestSave {
  @Column('int', {
    primary: true,
    name: 'pool_id',
    unsigned: true,
    default: () => '0',
  })
  poolId!: number

  @Column('int', {
    primary: true,
    name: 'quest_id',
    unsigned: true,
    default: () => '0',
  })
  questId!: number
}
