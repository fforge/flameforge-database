import { CHARACTER_QUESTSTATUS_DAILY, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_guid', ['guid'], {})
@Entity(CHARACTER_QUESTSTATUS_DAILY, { schema: STORE_CHARACTERS })
export class CharacterQueststatusDaily {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'quest',
    comment: 'Quest Identifier',
    unsigned: true,
    default: () => '0',
  })
  quest!: number

  @Column('int', { name: 'time', unsigned: true, default: () => '0' })
  time!: number
}
