import { BATTLENET_ACCOUNTS, STORE_AUTH } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Account } from './Account'

@Entity(BATTLENET_ACCOUNTS, { schema: STORE_AUTH })
export class BattlenetAccounts {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: 'Identifier',
    unsigned: true,
  })
  id!: number

  @Column('varchar', { name: 'email', length: 320 })
  email!: string

  @Column('varchar', { name: 'sha_pass_hash', length: 64, default: () => '' })
  shaPassHash!: string

  @Column('varchar', { name: 'v', length: 256, default: () => '' })
  v!: string

  @Column('varchar', { name: 's', length: 64, default: () => '' })
  s!: string

  @Column('varchar', { name: 'sessionKey', length: 128, default: () => '' })
  sessionKey!: string

  @Column('timestamp', { name: 'joindate', default: () => 'CURRENT_TIMESTAMP' })
  joindate!: Date

  @Column('varchar', {
    name: 'last_ip',
    length: 15,
    default: () => '127.0.0.1',
  })
  lastIp!: string

  @Column('int', {
    name: 'failed_logins',
    unsigned: true,
    default: () => '0',
  })
  failedLogins!: number

  @Column('tinyint', { name: 'locked', unsigned: true, default: () => '0' })
  locked!: number

  @Column('varchar', { name: 'lock_country', length: 2, default: () => '00' })
  lockCountry!: string

  @Column('timestamp', { name: 'last_login', nullable: true })
  lastLogin!: Date | null

  @Column('tinyint', { name: 'online', unsigned: true, default: () => '0' })
  online!: number

  @Column('tinyint', { name: 'locale', unsigned: true, default: () => '0' })
  locale!: number

  @Column('varchar', { name: 'os', nullable: true, length: 5 })
  os!: Nullable<string>

  @OneToMany(() => Account, (account) => account.battlenetAccount2)
  accounts!: Account[]
}
