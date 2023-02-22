import { CHARACTER_INVENTORY, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('guid', ['guid', 'bag', 'slot'], { unique: true })
@Index('idx_guid', ['guid'], {})
@Entity(CHARACTER_INVENTORY, { schema: STORE_CHARACTERS })
export class CharacterInventory {
  @Column('int', {
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', { name: 'bag', unsigned: true, default: () => '0' })
  bag!: number

  @Column('tinyint', { name: 'slot', unsigned: true, default: () => '0' })
  slot!: number

  @Column('int', {
    primary: true,
    name: 'item',
    comment: 'Item Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  item!: number
}
