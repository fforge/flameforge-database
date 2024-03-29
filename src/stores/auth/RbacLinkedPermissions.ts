import { RBAC_LINKED_PERMISSIONS } from '#constants/auth'
import { RbacLinkedPermissions } from '#models/auth/RbacLinkedPermissions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RbacLinkedPermissionsStore extends Core<RbacLinkedPermissions> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  RbacLinkedPermissions,
      name: RBAC_LINKED_PERMISSIONS,
      store: data_source.getRepository(RBAC_LINKED_PERMISSIONS),
    })
  }
}