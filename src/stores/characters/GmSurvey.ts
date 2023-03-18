import { GM_SURVEY } from '#constants/characters'
import { GmSurvey } from '#models/characters/GmSurvey'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GmSurveyStore extends Core<GmSurvey> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GmSurvey,
      name: GM_SURVEY,
      store: data_source.getRepository(GM_SURVEY),
    })
  }
}