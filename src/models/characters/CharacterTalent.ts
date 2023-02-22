import { CHARACTER_TALENT, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_TALENT, { schema: STORE_CHARACTERS })
export class CharacterTalent {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('int', { primary: true, name: 'spell', unsigned: true })
  spell!: number

  @Column('tinyint', {
    primary: true,
    name: 'talentGroup',
    unsigned: true,
    default: () => '0',
  })
  talentGroup!: number
}
