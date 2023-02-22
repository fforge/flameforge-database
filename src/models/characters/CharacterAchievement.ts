import { CHARACTER_ACHIEVEMENT, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ACHIEVEMENT, { schema: STORE_CHARACTERS })
export class CharacterAchievement {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('smallint', { primary: true, name: 'achievement', unsigned: true })
  achievement!: number

  @Column('int', { name: 'date', unsigned: true, default: () => '0' })
  date!: number
}
