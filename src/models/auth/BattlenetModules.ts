import { BATTLENET_MODULES, STORE_AUTH } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('uk_name_type_system', ['name', 'type', 'system'], { unique: true })
@Entity(BATTLENET_MODULES, { schema: STORE_AUTH })
export class BattlenetModules {
  @Column('varchar', { name: 'Hash', length: 64 })
  hash!: string

  @Column('varchar', {
    primary: true,
    name: 'Name',
    length: 64,
    default: () => '',
  })
  name!: string

  @Column('varchar', { name: 'Type', length: 8 })
  type!: string

  @Column('varchar', { primary: true, name: 'System', length: 8 })
  system!: string

  @Column('text', { name: 'Data', nullable: true })
  data!: Nullable<string>
}
