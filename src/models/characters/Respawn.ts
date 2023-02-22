import { RESPAWN, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_instance', ['instanceId'], {})
@Entity(RESPAWN, { schema: STORE_CHARACTERS })
export class Respawn {
  @Column('smallint', { primary: true, name: 'type', unsigned: true })
  type!: number

  @Column('int', { primary: true, name: 'spawnId', unsigned: true })
  spawnId!: number

  @Column('bigint', { name: 'respawnTime', unsigned: true })
  respawnTime!: string

  @Column('smallint', { name: 'mapId', unsigned: true })
  mapId!: number

  @Column('int', { primary: true, name: 'instanceId', unsigned: true })
  instanceId!: number
}
