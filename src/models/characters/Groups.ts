import { GROUPS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('leaderGuid', ['leaderGuid'], {})
@Entity(GROUPS, { schema: STORE_CHARACTERS })
export class Groups {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('int', { name: 'leaderGuid', unsigned: true })
  leaderGuid!: number

  @Column('tinyint', { name: 'lootMethod', unsigned: true })
  lootMethod!: number

  @Column('int', { name: 'looterGuid', unsigned: true })
  looterGuid!: number

  @Column('tinyint', { name: 'lootThreshold', unsigned: true })
  lootThreshold!: number

  @Column('bigint', { name: 'icon1', unsigned: true })
  icon1!: string

  @Column('bigint', { name: 'icon2', unsigned: true })
  icon2!: string

  @Column('bigint', { name: 'icon3', unsigned: true })
  icon3!: string

  @Column('bigint', { name: 'icon4', unsigned: true })
  icon4!: string

  @Column('bigint', { name: 'icon5', unsigned: true })
  icon5!: string

  @Column('bigint', { name: 'icon6', unsigned: true })
  icon6!: string

  @Column('bigint', { name: 'icon7', unsigned: true })
  icon7!: string

  @Column('bigint', { name: 'icon8', unsigned: true })
  icon8!: string

  @Column('tinyint', { name: 'groupType', unsigned: true })
  groupType!: number

  @Column('tinyint', {
    name: 'difficulty',
    unsigned: true,
    default: () => '0',
  })
  difficulty!: number

  @Column('tinyint', {
    name: 'raidDifficulty',
    unsigned: true,
    default: () => '0',
  })
  raidDifficulty!: number

  @Column('int', { name: 'masterLooterGuid', unsigned: true })
  masterLooterGuid!: number
}
