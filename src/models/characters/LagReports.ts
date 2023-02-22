import { LAG_REPORTS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(LAG_REPORTS, { schema: STORE_CHARACTERS })
export class LagReports {
  @PrimaryGeneratedColumn({ type: 'int', name: 'reportId', unsigned: true })
  reportId!: number

  @Column('int', { name: 'guid', unsigned: true, default: () => '0' })
  guid!: number

  @Column('tinyint', { name: 'lagType', unsigned: true, default: () => '0' })
  lagType!: number

  @Column('smallint', { name: 'mapId', unsigned: true, default: () => '0' })
  mapId!: number

  @Column('float', { name: 'posX', precision: 12, default: () => '0' })
  posX!: number

  @Column('float', { name: 'posY', precision: 12, default: () => '0' })
  posY!: number

  @Column('float', { name: 'posZ', precision: 12, default: () => '0' })
  posZ!: number

  @Column('int', { name: 'latency', unsigned: true, default: () => '0' })
  latency!: number

  @Column('int', { name: 'createTime', unsigned: true, default: () => '0' })
  createTime!: number
}
