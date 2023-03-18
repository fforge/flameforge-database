import { REALMCHARACTERS } from '#constants/auth'
import { Realmcharacters } from '#models/auth/Realmcharacters'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RealmcharactersStore extends Core<Realmcharacters> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Realmcharacters,
      name: REALMCHARACTERS,
      store: data_source.getRepository(REALMCHARACTERS),
    })
  }
}