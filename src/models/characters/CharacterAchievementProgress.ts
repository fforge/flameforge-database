import { CHARACTER_ACHIEVEMENT_PROGRESS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ACHIEVEMENT_PROGRESS, { schema: STORE_CHARACTERS })
export class CharacterAchievementProgress {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('smallint', { primary: true, name: 'criteria', unsigned: true })
  criteria!: number

  @Column('bigint', { name: 'counter', unsigned: true })
  counter!: string

  @Column('int', { name: 'date', unsigned: true, default: () => '0' })
  date!: number
}
