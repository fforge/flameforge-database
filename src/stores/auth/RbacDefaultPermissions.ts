import { RBAC_DEFAULT_PERMISSIONS } from '#constants/auth'
import { RbacDefaultPermissions } from '#models/auth/RbacDefaultPermissions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RbacDefaultPermissionsStore extends Core<RbacDefaultPermissions> {
  constructor (data_source: DataSource) {
    super({ model: new RbacDefaultPermissions, store: data_source.getRepository(RBAC_DEFAULT_PERMISSIONS) })
  }
}