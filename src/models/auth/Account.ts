import { BattlenetAccounts } from '#models/auth/BattlenetAccounts'
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { RbacAccountPermissions } from '#models/auth/RbacAccountPermissions'
import { Nullable } from '#types'
import { ACCOUNT, STORE_AUTH } from '#constants'

@Index('idx_username', ['username'], { unique: true })
@Index('uk_bnet_acc', ['battlenetAccount', 'battlenetIndex'], { unique: true })
@Entity(ACCOUNT, { schema: STORE_AUTH })
export class Account {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: 'Identifier',
    unsigned: true,
  })
  id!: number

  @Column('varchar', {
    name: 'username',
    unique: true,
    length: 32,
    default: () => '',
  })
  username!: string

  @Column('varchar', { name: 'sha_pass_hash', length: 40, default: () => '' })
  shaPassHash!: string

  @Column('varchar', { name: 'sessionkey', length: 80, default: () => '' })
  sessionkey!: string

  @Column('varchar', { name: 'v', length: 64, default: () => '' })
  v!: string

  @Column('varchar', { name: 's', length: 64, default: () => '' })
  s!: string

  @Column('varchar', { name: 'token_key', length: 100, default: () => '' })
  tokenKey!: string

  @Column('varchar', { name: 'email', length: 255, default: () => '' })
  email!: string

  @Column('varchar', { name: 'reg_mail', length: 255, default: () => '' })
  regMail!: string

  @Column('timestamp', { name: 'joindate', default: () => 'CURRENT_TIMESTAMP' })
  joindate!: Date

  @Column('varchar', {
    name: 'last_ip',
    length: 15,
    default: () => '127.0.0.1',
  })
  lastIp!: string

  @Column('varchar', {
    name: 'last_attempt_ip',
    length: 15,
    default: () => '127.0.0.1',
  })
  lastAttemptIp!: string

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
  lastLogin?: Date | null

  @Column('tinyint', { name: 'online', unsigned: true, default: () => '0' })
  online!: number

  @Column('tinyint', {
    name: 'expansion',
    unsigned: true,
    default: () => '3',
  })
  expansion!: number

  @Column('bigint', { name: 'mutetime', default: () => '0' })
  mutetime!: string

  @Column('varchar', { name: 'mutereason', length: 255, default: () => '' })
  mutereason!: string

  @Column('varchar', { name: 'muteby', length: 50, default: () => '' })
  muteby!: string

  @Column('tinyint', { name: 'locale', unsigned: true, default: () => '0' })
  locale!: number

  @Column('varchar', { name: 'os', nullable: true, length: 5 })
  os?: Nullable<string>

  @Column('int', { name: 'recruiter', unsigned: true, default: () => '0' })
  recruiter!: number

  @Column('int', { name: 'battlenet_account', nullable: true, unsigned: true })
  battlenetAccount!: Nullable<number>

  @Column('tinyint', {
    name: 'battlenet_index',
    nullable: true,
    unsigned: true,
  })
  battlenetIndex?: Nullable<number>

  // @OneToMany(
  //   () => RbacAccountPermissions,
  //   (rbacAccountPermissions) => rbacAccountPermissions.account
  // )
  // rbacAccountPermissions!: RbacAccountPermissions[]

  @ManyToOne(
    () => BattlenetAccounts,
    (battlenetAccounts) => battlenetAccounts.accounts,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'battlenet_account', referencedColumnName: 'id' }])
  battlenetAccount2!: BattlenetAccounts
}
