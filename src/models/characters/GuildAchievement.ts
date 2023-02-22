import { GUILD_ACHIEVEMENT, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GUILD_ACHIEVEMENT, { schema: STORE_CHARACTERS })
export class GuildAchievement {
  @Column('int', { primary: true, name: 'guildId', unsigned: true })
  guildId!: number

  @Column('smallint', { primary: true, name: 'achievement', unsigned: true })
  achievement!: number

  @Column('int', { name: 'date', unsigned: true, default: () => '0' })
  date!: number

  @Column('text', { name: 'guids' })
  guids!: string
}
