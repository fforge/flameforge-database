import { REALMLIST } from '#constants/auth'
import { Realmlist } from '#models/auth/Realmlist'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RealmlistStore extends Core<Realmlist> {
  constructor (data_source: DataSource) {
    super({ model: new Realmlist, store: data_source.getRepository(REALMLIST) })
  }
}