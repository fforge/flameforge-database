import { LFG_DATA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(LFG_DATA, { schema: STORE_CHARACTERS })
export class LfgData {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', { name: 'dungeon', unsigned: true, default: () => '0' })
  dungeon!: number

  @Column('tinyint', { name: 'state', unsigned: true, default: () => '0' })
  state!: number
}
