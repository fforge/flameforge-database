import { RBAC_PERMISSIONS } from '#constants/auth'
import { RbacPermissions } from '#models/auth/RbacPermissions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RbacPermissionsStore extends Core<RbacPermissions> {
  constructor (data_source: DataSource) {
    super({ model: new RbacPermissions, store: data_source.getRepository(RBAC_PERMISSIONS) })
  }
}