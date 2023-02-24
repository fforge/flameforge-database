import { CHARACTER_INVENTORY } from '#constants/characters'
import { CharacterInventory } from '#models/characters/CharacterInventory'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterInventoryStore extends Core<CharacterInventory> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterInventory,
      store: data_source.getRepository(CHARACTER_INVENTORY),
    })
  }
}