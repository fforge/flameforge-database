import { RBAC_ACCOUNT_PERMISSIONS } from '#constants/auth'
import { RbacAccountPermissions } from '#models/auth/RbacAccountPermissions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RbacAccountPermissionsStore extends Core<RbacAccountPermissions> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  RbacAccountPermissions,
      name: RBAC_ACCOUNT_PERMISSIONS,
      store: data_source.getRepository(RBAC_ACCOUNT_PERMISSIONS),
    })
  }
}