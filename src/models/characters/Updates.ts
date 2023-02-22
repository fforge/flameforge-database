import { CHARACTERS_UPDATES, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTERS_UPDATES, { schema: STORE_CHARACTERS })
export class Updates {
  @Column('varchar', {
    primary: true,
    name: 'name',
    comment: 'filename with extension of the update.',
    length: 200,
  })
  name!: string

  @Column('char', {
    name: 'hash',
    nullable: true,
    comment: 'sha1 hash of the sql file.',
    length: 40,
    default: () => '',
  })
  hash!: Nullable<string>

  @Column('enum', {
    name: 'state',
    comment: 'defines if an update is released or archived.',
    enum: ['RELEASED', 'ARCHIVED'],
    default: () => 'RELEASED',
  })
  state!: 'RELEASED' | 'ARCHIVED'

  @Column('timestamp', {
    name: 'timestamp',
    comment: 'timestamp when the query was applied.',
    default: () => 'CURRENT_TIMESTAMP',
  })
  timestamp!: Date

  @Column('int', {
    name: 'speed',
    comment: 'time the query takes to apply in ms.',
    unsigned: true,
    default: () => '0',
  })
  speed!: number
}
