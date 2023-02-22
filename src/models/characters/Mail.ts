import { MAIL, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_receiver', ['receiver'], {})
@Entity(MAIL, { schema: STORE_CHARACTERS })
export class Mail {
  @Column('int', {
    primary: true,
    name: 'id',
    comment: 'Identifier',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('tinyint', {
    name: 'messageType',
    unsigned: true,
    default: () => '0',
  })
  messageType!: number

  @Column('tinyint', { name: 'stationery', default: () => '41' })
  stationery!: number

  @Column('smallint', {
    name: 'mailTemplateId',
    unsigned: true,
    default: () => '0',
  })
  mailTemplateId!: number

  @Column('int', {
    name: 'sender',
    comment: 'Character Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  sender!: number

  @Column('int', {
    name: 'receiver',
    comment: 'Character Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  receiver!: number

  @Column('longtext', { name: 'subject', nullable: true })
  subject!: Nullable<string>

  @Column('longtext', { name: 'body', nullable: true })
  body!: Nullable<string>

  @Column('tinyint', {
    name: 'has_items',
    unsigned: true,
    default: () => '0',
  })
  hasItems!: number

  @Column('int', { name: 'expire_time', unsigned: true, default: () => '0' })
  expireTime!: number

  @Column('int', { name: 'deliver_time', unsigned: true, default: () => '0' })
  deliverTime!: number

  @Column('bigint', { name: 'money', unsigned: true, default: () => '0' })
  money!: string

  @Column('bigint', { name: 'cod', unsigned: true, default: () => '0' })
  cod!: string

  @Column('tinyint', { name: 'checked', unsigned: true, default: () => '0' })
  checked!: number
}
