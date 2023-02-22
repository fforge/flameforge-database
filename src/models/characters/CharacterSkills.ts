import { CHARACTER_SKILLS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_SKILLS, { schema: STORE_CHARACTERS })
export class CharacterSkills {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
  })
  guid!: number

  @Column('smallint', { primary: true, name: 'skill', unsigned: true })
  skill!: number

  @Column('smallint', { name: 'value', unsigned: true })
  value!: number

  @Column('smallint', { name: 'max', unsigned: true })
  max!: number
}
