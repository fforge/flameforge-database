import { LOGS_IP_ACTIONS, STORE_AUTH } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(LOGS_IP_ACTIONS, { schema: STORE_AUTH })
export class LogsIpActions {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: 'Unique Identifier',
    unsigned: true,
  })
  id!: number

  @Column('int', { name: 'account_id', comment: 'Account ID', unsigned: true })
  accountId!: number

  @Column('int', {
    name: 'character_guid',
    comment: 'Character Guid',
    unsigned: true,
  })
  characterGuid!: number

  @Column('tinyint', { name: 'type', unsigned: true })
  type!: number

  @Column('varchar', { name: 'ip', length: 15, default: () => '127.0.0.1' })
  ip!: string

  @Column('text', {
    name: 'systemnote',
    nullable: true,
    comment: 'Notes inserted by system',
  })
  systemnote!: Nullable<string>

  @Column('int', { name: 'unixtime', comment: 'Unixtime', unsigned: true })
  unixtime!: number

  @Column('timestamp', {
    name: 'time',
    comment: 'Timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  time!: Date

  @Column('text', {
    name: 'comment',
    nullable: true,
    comment: 'Allows users to add a comment',
  })
  comment!: Nullable<string>
}
