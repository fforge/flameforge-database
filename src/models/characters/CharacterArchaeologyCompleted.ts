import { CHARACTER_ARCHAEOLOGY_COMPLETED, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ARCHAEOLOGY_COMPLETED, { schema: STORE_CHARACTERS })
export class CharacterArchaeologyCompleted {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('smallint', { primary: true, name: 'project', unsigned: true })
  project!: number

  @Column('int', { name: 'time' })
  time!: number

  @Column('int', { name: 'count' })
  count!: number
}
