import { MAIL_ITEMS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_receiver', ['receiver'], {})
@Index('idx_mail_id', ['mailId'], {})
@Entity(MAIL_ITEMS, { schema: STORE_CHARACTERS })
export class MailItems {
  @Column('int', { name: 'mail_id', unsigned: true, default: () => '0' })
  mailId!: number

  @Column('int', {
    primary: true,
    name: 'item_guid',
    unsigned: true,
    default: () => '0',
  })
  itemGuid!: number

  @Column('int', {
    name: 'receiver',
    comment: 'Character Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  receiver!: number
}
