import { GUILD_BANK_TAB, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('guildid_key', ['guildid'], {})
@Entity(GUILD_BANK_TAB, { schema: STORE_CHARACTERS })
export class GuildBankTab {
  @Column('int', {
    primary: true,
    name: 'guildid',
    unsigned: true,
    default: () => '0',
  })
  guildid!: number

  @Column('tinyint', {
    primary: true,
    name: 'TabId',
    unsigned: true,
    default: () => '0',
  })
  tabId!: number

  @Column('varchar', { name: 'TabName', length: 16, default: () => '' })
  tabName!: string

  @Column('varchar', { name: 'TabIcon', length: 100, default: () => '' })
  tabIcon!: string

  @Column('varchar', { name: 'TabText', nullable: true, length: 500 })
  tabText!: Nullable<string>
}
