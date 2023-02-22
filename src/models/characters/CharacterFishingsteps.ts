import { CHARACTER_FISHINGSTEPS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_FISHINGSTEPS, { schema: STORE_CHARACTERS })
export class CharacterFishingsteps {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('tinyint', {
    name: 'fishingSteps',
    unsigned: true,
    default: () => '0',
  })
  fishingSteps!: number
}
