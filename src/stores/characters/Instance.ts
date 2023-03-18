import { INSTANCE } from '#constants/characters'
import { Instance } from '#models/characters/Instance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class InstanceStore extends Core<Instance> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Instance,
      name: INSTANCE,
      store: data_source.getRepository(INSTANCE),
    })
  }
}