import { INSTANCE_RESET } from '#constants/characters'
import { InstanceReset } from '#models/characters/InstanceReset'
import { DataSource } from 'typeorm'
import Core from '#core'

export class InstanceResetStore extends Core<InstanceReset> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: InstanceReset,
      name: INSTANCE_RESET,
      store: data_source.getRepository(INSTANCE_RESET),
    })
  }
}