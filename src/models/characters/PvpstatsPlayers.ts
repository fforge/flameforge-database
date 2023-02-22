import { PVPSTATS_PLAYERS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(PVPSTATS_PLAYERS, { schema: STORE_CHARACTERS })
export class PvpstatsPlayers {
  @Column('bigint', { primary: true, name: 'battleground_id', unsigned: true })
  battlegroundId!: string

  @Column('int', { primary: true, name: 'character_guid', unsigned: true })
  characterGuid!: number

  @Column('bit', { name: 'winner' })
  winner!: boolean

  @Column('int', { name: 'score_killing_blows', unsigned: true })
  scoreKillingBlows!: number

  @Column('int', { name: 'score_deaths', unsigned: true })
  scoreDeaths!: number

  @Column('int', { name: 'score_honorable_kills', unsigned: true })
  scoreHonorableKills!: number

  @Column('int', { name: 'score_bonus_honor', unsigned: true })
  scoreBonusHonor!: number

  @Column('int', { name: 'score_damage_done', unsigned: true })
  scoreDamageDone!: number

  @Column('int', { name: 'score_healing_done', unsigned: true })
  scoreHealingDone!: number

  @Column('int', { name: 'attr_1', unsigned: true, default: () => '0' })
  attr_1!: number

  @Column('int', { name: 'attr_2', unsigned: true, default: () => '0' })
  attr_2!: number

  @Column('int', { name: 'attr_3', unsigned: true, default: () => '0' })
  attr_3!: number

  @Column('int', { name: 'attr_4', unsigned: true, default: () => '0' })
  attr_4!: number

  @Column('int', { name: 'attr_5', unsigned: true, default: () => '0' })
  attr_5!: number
}
