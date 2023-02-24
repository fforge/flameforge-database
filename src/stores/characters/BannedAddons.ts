import { BANNED_ADDONS } from '#constants/characters'
import { BannedAddons } from '#models/characters/BannedAddons'
import { DataSource } from 'typeorm'
import Core from '#core'

export class BannedAddonsStore extends Core<BannedAddons> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  BannedAddons,
      store: data_source.getRepository(BANNED_ADDONS),
    })
  }
}