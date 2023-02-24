import { BUGREPORT } from '#constants/characters'
import { Bugreport } from '#models/characters/Bugreport'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BugreportStore extends Core<Bugreport> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  Bugreport,
      store: data_source.getRepository(BUGREPORT),
    })
  }
}