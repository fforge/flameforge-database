import { INSTANCE_RESET, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('difficulty', ['difficulty'], {})
@Entity(INSTANCE_RESET, { schema: STORE_CHARACTERS })
export class InstanceReset {
  @Column('smallint', {
    primary: true,
    name: 'mapid',
    unsigned: true,
    default: () => '0',
  })
  mapid!: number

  @Column('tinyint', {
    primary: true,
    name: 'difficulty',
    unsigned: true,
    default: () => '0',
  })
  difficulty!: number

  @Column('bigint', { name: 'resettime', unsigned: true, default: () => '0' })
  resettime!: string
}
