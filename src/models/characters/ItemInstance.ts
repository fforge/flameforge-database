import { ITEM_INSTANCE, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_owner_guid', ['ownerGuid'], {})
@Entity(ITEM_INSTANCE, { schema: STORE_CHARACTERS })
export class ItemInstance {
  @Column('int', {
    primary: true,
    name: 'guid',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', { name: 'itemEntry', unsigned: true, default: () => '0' })
  itemEntry!: number

  @Column('int', { name: 'owner_guid', unsigned: true, default: () => '0' })
  ownerGuid!: number

  @Column('int', { name: 'creatorGuid', unsigned: true, default: () => '0' })
  creatorGuid!: number

  @Column('int', {
    name: 'giftCreatorGuid',
    unsigned: true,
    default: () => '0',
  })
  giftCreatorGuid!: number

  @Column('int', { name: 'count', unsigned: true, default: () => '1' })
  count!: number

  @Column('int', { name: 'duration', default: () => '0' })
  duration!: number

  @Column('tinytext', { name: 'charges', nullable: true })
  charges!: Nullable<string>

  @Column('int', { name: 'flags', unsigned: true, default: () => '0' })
  flags!: number

  @Column('text', { name: 'enchantments' })
  enchantments!: string

  @Column('tinyint', {
    name: 'randomPropertyType',
    unsigned: true,
    default: () => '0',
  })
  randomPropertyType!: number

  @Column('int', {
    name: 'randomPropertyId',
    unsigned: true,
    default: () => '0',
  })
  randomPropertyId!: number

  @Column('smallint', {
    name: 'durability',
    unsigned: true,
    default: () => '0',
  })
  durability!: number

  @Column('int', { name: 'creationTime', unsigned: true, default: () => '0' })
  creationTime!: number

  @Column('text', { name: 'text', nullable: true })
  text!: Nullable<string>
}
