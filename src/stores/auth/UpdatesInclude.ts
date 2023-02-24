import { AUTH_UPDATES_INCLUDE } from '#constants/auth'
import { UpdatesInclude } from '#models/auth/UpdatesInclude'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AuthUpdatesIncludeStore extends Core<UpdatesInclude> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  UpdatesInclude,
      store: data_source.getRepository(AUTH_UPDATES_INCLUDE),
    })
  }
}