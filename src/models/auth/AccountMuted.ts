import { ACCOUNT_MUTED, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_MUTED, { schema: STORE_AUTH })
export class AccountMuted {
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
    name: 'mutedate',
    unsigned: true,
    default: () => '0',
  })
  mutedate!: number

  @Column('int', { name: 'mutetime', unsigned: true, default: () => '0' })
  mutetime!: number

  @Column('varchar', { name: 'mutedby', length: 50 })
  mutedby!: string

  @Column('varchar', { name: 'mutereason', length: 255 })
  mutereason!: string
}
