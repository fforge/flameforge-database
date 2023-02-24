import { RBAC_ACCOUNT_PERMISSIONS, STORE_AUTH } from '#constants'
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { Account } from './Account'
import { RbacPermissions } from './RbacPermissions'

@Index('fk__rbac_account_roles__rbac_permissions', ['permissionId'], {})
@Entity(RBAC_ACCOUNT_PERMISSIONS, { schema: STORE_AUTH })
export class RbacAccountPermissions {
  @Column('int', {
    primary: true,
    name: 'accountId',
    comment: 'Account id',
    unsigned: true,
  })
  accountId!: number

  @Column('int', {
    primary: true,
    name: 'permissionId',
    comment: 'Permission id',
    unsigned: true,
  })
  permissionId!: number

  @Column('tinyint', {
    name: 'granted',
    comment: 'Granted = 1, Denied = 0',
    width: 1,
    default: () => '1',
  })
  granted!: boolean

  @Column('int', {
    primary: true,
    name: 'realmId',
    comment: 'Realm Id, -1 means all',
    default: () => '-1',
  })
  realmId!: number

  // @ManyToOne(() => Account, (account) => account.rbacAccountPermissions, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'RESTRICT',
  // })
  // @JoinColumn([{ name: 'accountId', referencedColumnName: 'id' }])
  // account!: Account

  @ManyToOne(
    () => RbacPermissions,
    // (rbacPermissions) => rbacPermissions.rbacAccountPermissions,
    { onDelete: 'CASCADE', onUpdate: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'permissionId', referencedColumnName: 'id' }])
  permission!: RbacPermissions
}
