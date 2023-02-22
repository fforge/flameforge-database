import { CHARACTER_BANNED, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_BANNED, { schema: STORE_CHARACTERS })
export class CharacterBanned {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'bandate',
    unsigned: true,
    default: () => '0',
  })
  bandate!: number

  @Column('int', { name: 'unbandate', unsigned: true, default: () => '0' })
  unbandate!: number

  @Column('varchar', { name: 'bannedby', length: 50 })
  bannedby!: string

  @Column('varchar', { name: 'banreason', length: 255 })
  banreason!: string

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '1' })
  active!: number
}
