import { CHARACTER_BATTLEGROUND_RANDOM, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_BATTLEGROUND_RANDOM, { schema: STORE_CHARACTERS })
export class CharacterBattlegroundRandom {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number
}
