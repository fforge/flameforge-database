import { GUILD_MEMBER_WITHDRAW, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GUILD_MEMBER_WITHDRAW, { schema: STORE_CHARACTERS })
export class GuildMemberWithdraw {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('int', { name: 'tab0', unsigned: true, default: () => '0' })
  tab0!: number

  @Column('int', { name: 'tab1', unsigned: true, default: () => '0' })
  tab1!: number

  @Column('int', { name: 'tab2', unsigned: true, default: () => '0' })
  tab2!: number

  @Column('int', { name: 'tab3', unsigned: true, default: () => '0' })
  tab3!: number

  @Column('int', { name: 'tab4', unsigned: true, default: () => '0' })
  tab4!: number

  @Column('int', { name: 'tab5', unsigned: true, default: () => '0' })
  tab5!: number

  @Column('int', { name: 'tab6', unsigned: true, default: () => '0' })
  tab6!: number

  @Column('int', { name: 'tab7', unsigned: true, default: () => '0' })
  tab7!: number

  @Column('bigint', { name: 'money', unsigned: true, default: () => '0' })
  money!: string
}
