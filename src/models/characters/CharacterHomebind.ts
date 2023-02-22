import { CHARACTER_HOMEBIND, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_HOMEBIND, { schema: STORE_CHARACTERS })
export class CharacterHomebind {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('smallint', {
    name: 'mapId',
    comment: 'Map Identifier',
    unsigned: true,
    default: () => '0',
  })
  mapId!: number

  @Column('smallint', {
    name: 'zoneId',
    comment: 'Zone Identifier',
    unsigned: true,
    default: () => '0',
  })
  zoneId!: number

  @Column('float', { name: 'posX', precision: 12, default: () => '0' })
  posX!: number

  @Column('float', { name: 'posY', precision: 12, default: () => '0' })
  posY!: number

  @Column('float', { name: 'posZ', precision: 12, default: () => '0' })
  posZ!: number
}
