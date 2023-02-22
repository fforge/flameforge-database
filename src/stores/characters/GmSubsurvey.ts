import { GM_SUBSURVEY } from '#constants/characters'
import { GmSubsurvey } from '#models/characters/GmSubsurvey'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GmSubsurveyStore extends Core<GmSubsurvey> {
  constructor (data_source: DataSource) {
    super({
      model: new GmSubsurvey,
      store: data_source.getRepository(GM_SUBSURVEY),
    })
  }
}