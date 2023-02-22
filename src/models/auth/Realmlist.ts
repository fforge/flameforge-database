import { REALMLIST, STORE_AUTH } from '#constants'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('idx_name', ['name'], { unique: true })
@Entity(REALMLIST, { schema: STORE_AUTH })
export class Realmlist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id!: number

  @Column('varchar', {
    name: 'name',
    unique: true,
    length: 32,
    default: () => '',
  })
  name!: string

  @Column('varchar', {
    name: 'address',
    length: 255,
    default: () => '127.0.0.1',
  })
  address!: string

  @Column('varchar', {
    name: 'localAddress',
    length: 255,
    default: () => '127.0.0.1',
  })
  localAddress!: string

  @Column('varchar', {
    name: 'localSubnetMask',
    length: 255,
    default: () => '255.255.255.0',
  })
  localSubnetMask!: string

  @Column('smallint', { name: 'port', unsigned: true, default: () => '8085' })
  port!: number

  @Column('tinyint', { name: 'icon', unsigned: true, default: () => '0' })
  icon!: number

  @Column('tinyint', { name: 'flag', unsigned: true, default: () => '2' })
  flag!: number

  @Column('tinyint', { name: 'timezone', unsigned: true, default: () => '0' })
  timezone!: number

  @Column('tinyint', {
    name: 'allowedSecurityLevel',
    unsigned: true,
    default: () => '0',
  })
  allowedSecurityLevel!: number

  @Column('float', {
    name: 'population',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  population!: number

  @Column('int', {
    name: 'gamebuild',
    unsigned: true,
    default: () => '15595',
  })
  gamebuild!: number

  @Column('tinyint', { name: 'Region', unsigned: true, default: () => '2' })
  region!: number

  @Column('tinyint', {
    name: 'Battlegroup',
    unsigned: true,
    default: () => '1',
  })
  battlegroup!: number
}
