import { INSTANCE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('map', ['map'], {})
@Index('resettime', ['resettime'], {})
@Index('difficulty', ['difficulty'], {})
@Entity(INSTANCE, { schema: STORE_CHARACTERS })
export class Instance {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('smallint', { name: 'map', unsigned: true, default: () => '0' })
  map!: number

  @Column('bigint', { name: 'resettime', unsigned: true, default: () => '0' })
  resettime!: string

  @Column('tinyint', {
    name: 'difficulty',
    unsigned: true,
    default: () => '0',
  })
  difficulty!: number

  @Column('int', {
    name: 'completedEncounters',
    unsigned: true,
    default: () => '0',
  })
  completedEncounters!: number

  @Column('tinytext', { name: 'data' })
  data!: string
}
