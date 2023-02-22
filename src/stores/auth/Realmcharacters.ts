import { REALMCHARACTERS } from '#constants/auth'
import { Realmcharacters } from '#models/auth/Realmcharacters'
import { DataSource } from 'typeorm'
import Core from '#core'

export class RealmcharactersStore extends Core<Realmcharacters> {
  constructor (data_source: DataSource) {
    super({ model: new Realmcharacters, store: data_source.getRepository(REALMCHARACTERS) })
  }
}