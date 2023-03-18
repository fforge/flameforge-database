import { IP_BANNED } from '#constants/auth'
import { IpBanned } from '#models/auth/IpBanned'
import { DataSource } from 'typeorm'
import Core from '#core'

export class IpBannedStore extends Core<IpBanned> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  IpBanned,
      name: IP_BANNED,
      store: data_source.getRepository(IP_BANNED),
    })
  }
}