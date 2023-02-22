import { CORPSE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_type', ['corpseType'], {})
@Index('idx_instance', ['instanceId'], {})
@Index('idx_time', ['time'], {})
@Entity(CORPSE, { schema: STORE_CHARACTERS })
export class Corpse {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Character Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('float', { name: 'posX', precision: 12, default: () => '0' })
  posX!: number

  @Column('float', { name: 'posY', precision: 12, default: () => '0' })
  posY!: number

  @Column('float', { name: 'posZ', precision: 12, default: () => '0' })
  posZ!: number

  @Column('float', { name: 'orientation', precision: 12, default: () => '0' })
  orientation!: number

  @Column('smallint', {
    name: 'mapId',
    comment: 'Map Identifier',
    unsigned: true,
    default: () => '0',
  })
  mapId!: number

  @Column('int', { name: 'displayId', unsigned: true, default: () => '0' })
  displayId!: number

  @Column('text', { name: 'itemCache' })
  itemCache!: string

  @Column('int', { name: 'bytes1', unsigned: true, default: () => '0' })
  bytes1!: number

  @Column('int', { name: 'bytes2', unsigned: true, default: () => '0' })
  bytes2!: number

  @Column('tinyint', { name: 'flags', unsigned: true, default: () => '0' })
  flags!: number

  @Column('tinyint', { name: 'dynFlags', unsigned: true, default: () => '0' })
  dynFlags!: number

  @Column('int', { name: 'time', unsigned: true, default: () => '0' })
  time!: number

  @Column('tinyint', {
    name: 'corpseType',
    unsigned: true,
    default: () => '0',
  })
  corpseType!: number

  @Column('int', {
    name: 'instanceId',
    comment: 'Instance Identifier',
    unsigned: true,
    default: () => '0',
  })
  instanceId!: number
}
