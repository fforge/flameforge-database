import { PETITION_SIGN } from '#constants/characters'
import { PetitionSign } from '#models/characters/PetitionSign'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PetitionSignStore extends Core<PetitionSign> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: PetitionSign,
      name: PETITION_SIGN,
      store: data_source.getRepository(PETITION_SIGN),
    })
  }
}