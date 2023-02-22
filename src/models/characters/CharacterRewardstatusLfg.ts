import { CHARACTER_REWARDSTATUS_LFG, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_REWARDSTATUS_LFG, { schema: STORE_CHARACTERS })
export class CharacterRewardstatusLfg {
  @Column('int', {
    name: 'guid',
    comment: 'Global Unique Identifier',
    default: () => '0',
  })
  guid!: number

  @Column('smallint', {
    name: 'dungeonId',
    comment: 'Dungeon ID Identifier',
    default: () => '0',
  })
  dungeonId!: number

  @Column('tinyint', {
    name: 'rewardCount',
    nullable: true,
    comment: 'Dungeon First Reward Count Identifier',
    unsigned: true,
    default: () => '0',
  })
  rewardCount!: Nullable<number>

  @Column('tinyint', {
    name: 'dailyReset',
    nullable: true,
    comment: 'Reward Count Daily Reset Identifier',
    unsigned: true,
    default: () => '0',
  })
  dailyReset!: Nullable<number>
}
