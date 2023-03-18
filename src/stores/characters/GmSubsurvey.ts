import { GM_SUBSURVEY } from '#constants/characters'
import { GmSubsurvey } from '#models/characters/GmSubsurvey'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GmSubsurveyStore extends Core<GmSubsurvey> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GmSubsurvey,
      name: GM_SUBSURVEY,
      store: data_source.getRepository(GM_SUBSURVEY),
    })
  }
}