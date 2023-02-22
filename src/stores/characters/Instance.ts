import { INSTANCE } from '#constants/characters'
import { Instance } from '#models/characters/Instance'
import { DataSource } from 'typeorm'
import Core from '#core'

export class InstanceStore extends Core<Instance> {
  constructor (data_source: DataSource) {
    super({
      model: new Instance,
      store: data_source.getRepository(INSTANCE),
    })
  }
}