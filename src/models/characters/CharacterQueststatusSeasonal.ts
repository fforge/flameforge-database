import { CHARACTER_QUESTSTATUS_SEASONAL, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_guid', ['guid'], {})
@Entity(CHARACTER_QUESTSTATUS_SEASONAL, { schema: STORE_CHARACTERS })
export class CharacterQueststatusSeasonal {
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

  @Column('int', {
    name: 'event',
    comment: 'Event Identifier',
    unsigned: true,
    default: () => '0',
  })
  event!: number

  @Column('bigint', { name: 'completedTime', default: () => '0' })
  completedTime!: string
}
