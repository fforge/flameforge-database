import { RBAC_LINKED_PERMISSIONS } from '#constants/auth'
import { RbacLinkedPermissions } from '#models/auth/RbacLinkedPermissions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RbacLinkedPermissionsStore extends Core<RbacLinkedPermissions> {
  constructor (data_source: DataSource) {
    super({ model: new RbacLinkedPermissions, store: data_source.getRepository(RBAC_LINKED_PERMISSIONS) })
  }
}