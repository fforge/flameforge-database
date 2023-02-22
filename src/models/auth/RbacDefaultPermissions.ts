import { RBAC_DEFAULT_PERMISSIONS, STORE_AUTH } from '#constants'
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { RbacPermissions } from './RbacPermissions'

@Index('fk__rbac_default_permissions__rbac_permissions', ['permissionId'], {})
@Entity(RBAC_DEFAULT_PERMISSIONS, { schema: STORE_AUTH })
export class RbacDefaultPermissions {
  @Column('int', {
    primary: true,
    name: 'secId',
    comment: 'Security Level id',
    unsigned: true,
  })
  secId!: number

  @Column('int', {
    primary: true,
    name: 'permissionId',
    comment: 'permission id',
    unsigned: true,
  })
  permissionId!: number

  @Column('int', {
    primary: true,
    name: 'realmId',
    comment: 'Realm Id, -1 means all',
    default: () => '-1',
  })
  realmId!: number

  @ManyToOne(
    () => RbacPermissions,
    // (rbacPermissions) => rbacPermissions.rbacDefaultPermissions,
    { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }
  )
  @JoinColumn([{ name: 'permissionId', referencedColumnName: 'id' }])
  permission!: RbacPermissions
}
