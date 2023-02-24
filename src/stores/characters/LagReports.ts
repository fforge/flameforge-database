import { LAG_REPORTS } from '#constants/characters'
import { LagReports } from '#models/characters/LagReports'
import { DataSource } from 'typeorm'
import Core from '#core'

export class LagReportsStore extends Core<LagReports> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  LagReports,
      store: data_source.getRepository(LAG_REPORTS),
    })
  }
}