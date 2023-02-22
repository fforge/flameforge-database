import { CHANNELS, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(CHANNELS, { schema: STORE_CHARACTERS })
export class Channels {
  @Column('varchar', { primary: true, name: 'name', length: 128 })
  name!: string

  @Column('int', { primary: true, name: 'team', unsigned: true })
  team!: number

  @Column('tinyint', { name: 'announce', unsigned: true, default: () => '1' })
  announce!: number

  @Column('tinyint', {
    name: 'ownership',
    unsigned: true,
    default: () => '1',
  })
  ownership!: number

  @Column('varchar', { name: 'password', nullable: true, length: 32 })
  password!: Nullable<string>

  @Column('text', { name: 'bannedList', nullable: true })
  bannedList!: Nullable<string>

  @Column('int', { name: 'lastUsed', unsigned: true })
  lastUsed!: number
}
