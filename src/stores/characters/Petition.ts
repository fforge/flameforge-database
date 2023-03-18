import { PETITION } from '#constants/characters'
import { Petition } from '#models/characters/Petition'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PetitionStore extends Core<Petition> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: Petition,
      name: PETITION,
      store: data_source.getRepository(PETITION),
    })
  }
}