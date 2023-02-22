import { CHARACTER_QUESTSTATUS_REWARDED, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_QUESTSTATUS_REWARDED, { schema: STORE_CHARACTERS })
export class CharacterQueststatusRewarded {
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

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '1' })
  active!: number
}
