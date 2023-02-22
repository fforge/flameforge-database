import { CHARACTER_ARCHAEOLOGY_SITES, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ARCHAEOLOGY_SITES, { schema: STORE_CHARACTERS })
export class CharacterArchaeologySites {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('tinyint', { primary: true, name: 'site', unsigned: true })
  site!: number

  @Column('smallint', { name: 'type', unsigned: true })
  type!: number

  @Column('tinyint', { name: 'finds', unsigned: true })
  finds!: number
}
