import { CHARACTER_GIFTS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_guid', ['guid'], {})
@Entity(CHARACTER_GIFTS, { schema: STORE_CHARACTERS })
export class CharacterGifts {
  @Column('int', { name: 'guid', unsigned: true, default: () => '0' })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'item_guid',
    unsigned: true,
    default: () => '0',
  })
  itemGuid!: number

  @Column('int', { name: 'entry', unsigned: true, default: () => '0' })
  entry!: number

  @Column('int', { name: 'flags', unsigned: true, default: () => '0' })
  flags!: number
}
