import { CHARACTER_EQUIPMENTSETS } from '#constants/characters'
import { CharacterEquipmentsets } from '#models/characters/CharacterEquipmentsets'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterEquipmentsetsStore extends Core<CharacterEquipmentsets> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterEquipmentsets,
      store: data_source.getRepository(CHARACTER_EQUIPMENTSETS),
    })
  }
}