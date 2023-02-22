import { GUILD_ACHIEVEMENT_PROGRESS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GUILD_ACHIEVEMENT_PROGRESS, { schema: STORE_CHARACTERS })
export class GuildAchievementProgress {
  @Column('int', { primary: true, name: 'guildId', unsigned: true })
  guildId!: number

  @Column('smallint', { primary: true, name: 'criteria', unsigned: true })
  criteria!: number

  @Column('bigint', { name: 'counter', unsigned: true })
  counter!: string

  @Column('int', { name: 'date', unsigned: true, default: () => '0' })
  date!: number

  @Column('int', {
    name: 'completedGuid',
    unsigned: true,
    default: () => '0',
  })
  completedGuid!: number
}
