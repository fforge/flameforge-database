import { GUILD_RANK, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('Idx_rid', ['rid'], {})
@Entity(GUILD_RANK, { schema: STORE_CHARACTERS })
export class GuildRank {
  @Column('int', {
    primary: true,
    name: 'guildid',
    unsigned: true,
    default: () => '0',
  })
  guildid!: number

  @Column('tinyint', { primary: true, name: 'rid', unsigned: true })
  rid!: number

  @Column('varchar', { name: 'rname', length: 20, default: () => '' })
  rname!: string

  @Column('int', { name: 'rights', unsigned: true, default: () => '0' })
  rights!: number

  @Column('int', {
    name: 'BankMoneyPerDay',
    unsigned: true,
    default: () => '0',
  })
  bankMoneyPerDay!: number
}
