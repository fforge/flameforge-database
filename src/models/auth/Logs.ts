import { LOGS, STORE_AUTH } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(LOGS, { schema: STORE_AUTH })
export class Logs {
  @Column('int', { name: 'time', unsigned: true })
  time!: number

  @Column('int', { name: 'realm', unsigned: true })
  realm!: number

  @Column('varchar', { name: 'type', length: 250 })
  type!: string

  @Column('tinyint', { name: 'level', unsigned: true, default: () => '0' })
  level!: number

  @Column('text', { name: 'string', nullable: true })
  string!: Nullable<string>
}
