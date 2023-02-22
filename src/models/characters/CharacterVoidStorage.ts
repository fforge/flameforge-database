import { CHARACTER_VOID_STORAGE, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_player_slot', ['playerGuid', 'slot'], { unique: true })
@Index('idx_player', ['playerGuid'], {})
@Entity(CHARACTER_VOID_STORAGE, { schema: STORE_CHARACTERS })
export class CharacterVoidStorage {
  @Column('bigint', { primary: true, name: 'itemId', unsigned: true })
  itemId!: string

  @Column('int', { name: 'playerGuid', unsigned: true })
  playerGuid!: number

  @Column('int', { name: 'itemEntry', unsigned: true })
  itemEntry!: number

  @Column('tinyint', { name: 'slot', unsigned: true })
  slot!: number

  @Column('int', { name: 'creatorGuid', unsigned: true, default: () => '0' })
  creatorGuid!: number

  @Column('tinyint', {
    name: 'randomPropertyType',
    unsigned: true,
    default: () => '0',
  })
  randomPropertyType!: number

  @Column('int', {
    name: 'randomProperty',
    unsigned: true,
    default: () => '0',
  })
  randomProperty!: number

  @Column('int', { name: 'suffixFactor', unsigned: true, default: () => '0' })
  suffixFactor!: number
}
