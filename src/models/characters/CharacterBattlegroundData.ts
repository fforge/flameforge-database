import { CHARACTER_BATTLEGROUND_DATA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_BATTLEGROUND_DATA, { schema: STORE_CHARACTERS })
export class CharacterBattlegroundData {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    name: 'instanceId',
    comment: 'Instance Identifier',
    unsigned: true,
  })
  instanceId!: number

  @Column('smallint', { name: 'team', unsigned: true })
  team!: number

  @Column('float', { name: 'joinX', precision: 12, default: () => '0' })
  joinX!: number

  @Column('float', { name: 'joinY', precision: 12, default: () => '0' })
  joinY!: number

  @Column('float', { name: 'joinZ', precision: 12, default: () => '0' })
  joinZ!: number

  @Column('float', { name: 'joinO', precision: 12, default: () => '0' })
  joinO!: number

  @Column('smallint', {
    name: 'joinMapId',
    comment: 'Map Identifier',
    unsigned: true,
    default: () => '0',
  })
  joinMapId!: number

  @Column('int', { name: 'taxiStart', unsigned: true, default: () => '0' })
  taxiStart!: number

  @Column('int', { name: 'taxiEnd', unsigned: true, default: () => '0' })
  taxiEnd!: number

  @Column('int', { name: 'mountSpell', unsigned: true, default: () => '0' })
  mountSpell!: number
}
