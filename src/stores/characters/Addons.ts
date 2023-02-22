import { ADDONS } from '#constants/characters'
import { Addons } from '#models/characters/Addons'
import { DataSource } from 'typeorm'
import Core from '#core'

export class AddonsStore extends Core<Addons> {
  constructor (data_source: DataSource) {
    super({
      model: new Addons,
      store: data_source.getRepository(ADDONS),
    })
  }
}