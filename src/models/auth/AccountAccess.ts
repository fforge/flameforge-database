import { ACCOUNT_ACCESS, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_ACCESS, { schema: STORE_AUTH })
export class AccountAccess {
  @Column('int', { primary: true, name: 'id', unsigned: true })
  id!: number

  @Column('tinyint', { name: 'gmlevel', unsigned: true })
  gmlevel!: number

  @Column('int', { primary: true, name: 'RealmID', default: () => '-1' })
  realmId!: number
}
